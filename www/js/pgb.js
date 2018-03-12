function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function personalInfo(){
	personalStuff = 'This card belongs to me, Rafał';
	navigator.notification.alert(personalStuff);
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}

function checkPosition(){
	function onSuccess(acceleration) {
		alert('Acceleration X: ' + acceleration.x + '\n' +
			  'Acceleration Y: ' + acceleration.y + '\n' +
			  'Acceleration Z: ' + acceleration.z + '\n' +
			  'Timestamp: '      + acceleration.timestamp + '\n');
	};
	
	function onError() {
		alert('onError!');
	};
	navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
}


function displayContacts(){
	function onSuccess(contacts) {
		alert('Found ' + contacts.length + ' contacts.');
	};
	 
	function onError(contactError) {
		alert('onError!');
	};
	 
	// find all contacts with 'Piotrek' in any name field
	var options      = new ContactFindOptions();
	options.filter   = "Piotrek";
	options.multiple = true;
	options.desiredFields = [navigator.contacts.fieldType.id];
	options.hasPhoneNumber = true;
	var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
	navigator.contacts.find(fields, onSuccess, onError, options);
}

