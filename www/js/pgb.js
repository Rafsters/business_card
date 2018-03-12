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


function listContacts(){
	function onSuccess(contact) {
		alert("Save Success");
	};
	 
	function onError(contactError) {
		alert("Error = " + contactError.code);
	};
	 
	// create a new contact object
	var contact = navigator.contacts.create();
	contact.displayName = "Plumber";
	contact.nickname = "Plumber";            // specify both to support all devices
	 
	// populate some fields
	var name = new ContactName();
	name.givenName = "Jane";
	name.familyName = "Doe";
	contact.name = name;
	 
	// save to device
	contact.save(onSuccess,onError);
}


var app = {
    sendSms: function() {
        var number = document.getElementById('numberTxt').value.toString(); /* iOS: ensure number is actually a string */
        var message = document.getElementById('messageTxt').value;
        console.log("number=" + number + ", message= " + message);

        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: 'INTENT'  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };

        var success = function () { alert('Message sent successfully'); };
        var error = function (e) { alert('Message Failed:' + e); };
        sms.send(number, message, options, success, error);
    }
};