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

function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
}

function onError() {
    alert('onError!');
}

function checkPosition(){
	navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
}


function listContacts(){
	function onSuccess(contacts) {
		var ul = document.getElementById('contacts-list');
		for(var i=0;i<contacts.length; i++){
			var newLI = document.createElement('li');
			newLI.innerHTML = contacts[i].name.formatted;
			ul.appendChild(newLI);
		}
	};
	
	function onError(contactError) {
		alert('onError!');
	};
	var options = new ContactFindOptions();
	options.filter = "";
	options.multiple = true;
	filter = ["*"];
	navigator.contacts.find(filter, onSuccess, onError, options);

}





/*
function displayContacts(){
	function onSuccess(contacts) {
		for (var i = 0; i < contacts.length; i++) {
			alert("Formatted: "  + contacts[i].name.formatted       + "\n" +
				"Family Name: "  + contacts[i].name.familyName      + "\n" +
				"Given Name: "   + contacts[i].name.givenName       + "\n" +
				"Middle Name: "  + contacts[i].name.middleName      + "\n" +
				"Suffix: "       + contacts[i].name.honorificSuffix + "\n" +
				"Prefix: "       + contacts[i].name.honorificSuffix);
		}
	};
	
	function onError(contactError) {
		alert('onError!');
	};

	var options = new ContactFindOptions();
	options.filter = "";
	options.multiple = true;
	filter = ["*"];
	navigator.contacts.find(filter, onSuccess, onError, options);
}
*/
