

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnItXsE9RB0f21E_JTuQJsGbSfQUFr0BY",
  authDomain: "iot-w4-3b820.firebaseapp.com",
  databaseURL: "https://iot-w4-3b820-default-rtdb.firebaseio.com",
  projectId: "iot-w4-3b820",
  storageBucket: "iot-w4-3b820.appspot.com",
  messagingSenderId: "423110287072",
  appId: "1:423110287072:web:f331ecd242b43a2fea3a85",
  measurementId: "G-51VH2JN1XD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Get Temp form Fisebase (Auto load Temperature-------------------------)

firebase.database().ref("/TT_IoT/COUNT").on("value",function(snapshot){
  var count = snapshot.val();  
  document.getElementById("count").innerHTML = count;
  //console.log(Temp);
});


//Update Bulb status-----when reload website-------
//Read data once 
/*
firebase.database().ref("/TT_IoT").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val())

    var bulb_01_status = snapshot.val()
    if (bulb_01_status["BULB_01"] == "ON")
      document.getElementById("d01_img").src = "./img/light_bulb_on.png"
    else
      document.getElementById("d01_img").src = "./img/light_bulb_off.png"
  }
  else
    console.log("No data available!")
})
*/


// Auto update Bulb status
firebase.database().ref("/TT_IoT/BULB_01").on("value",function(snapshot){
  var bulb_01_status = snapshot.val();  
  if (bulb_01_status == "ON")
      document.getElementById("d01_img").src = "./img/light_bulb_on.png"
  else
      document.getElementById("d01_img").src = "./img/light_bulb_off.png"
});

//Den 01-------------------------------------------------------
var d01_on = document.getElementById("d01_on");
var d01_off = document.getElementById("d01_off");

d01_on.onclick = function(){
    document.getElementById("d01_img").src = "./img/light_bulb_on.png"
    
    firebase.database().ref("/TT_IoT").update({
    "BULB_01": "ON"
  })
}

d01_off.onclick = function(){
	document.getElementById("d01_img").src = "./img/light_bulb_off.png"
	
  firebase.database().ref("/TT_IoT").update({
		"BULB_01": "OFF"
	})
}

