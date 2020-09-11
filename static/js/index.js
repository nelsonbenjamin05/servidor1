//https://www.eclipse.org/paho/clients/js/

function entrar() {
		var msg=document.getElementById("contrasena").value;
        message = new Paho.MQTT.Message(msg);
        message.destinationName = "nelsonbenjamin05@gmail.com/ts";
        client.send(message);
		
}
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "nelsonbenjamin05@gmail.com",
    password: "123456789",
    onSuccess:onConnect,
    onFailure:doFail
  }

  client.connect(options);
   
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("nelsonbenjamin05@gmail.com/ts1");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "nelsonbenjamin05@gmail.com/ts";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  function onMessageArrived(message) {
	var msg=message.payloadString;
	document.getElementById("sn1").innerHTML=msg;
  }

  function doFail(e){
    console.log(e);
	
  }

  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  function onMessageArrived(message) {
	var msg=message.payloadString;
	document.getElementById("sn1").innerHTML=msg;
  }
  
