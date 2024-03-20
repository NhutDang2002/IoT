

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV50WLoJdptWVvzxsFfuUZ1x-PE8-iteA",
  authDomain: "tt-iot-d19a7.firebaseapp.com",
  databaseURL: "https://tt-iot-d19a7-default-rtdb.firebaseio.com",
  projectId: "tt-iot-d19a7",
  storageBucket: "tt-iot-d19a7.appspot.com",
  messagingSenderId: "64371872488",
  appId: "1:64371872488:web:36967c43001ea8f662ef5d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Get Temp form Fisebase (Auto load Temperature-------------------------)

firebase.database().ref("/TT_IoT/Temp").on("value",function(snapshot){
  var Temp = snapshot.val();  
  document.getElementById("nhietdo").innerHTML = Temp;
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
  if (bulb_01_status == "OFF")
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

