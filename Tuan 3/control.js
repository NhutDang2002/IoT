const firebaseConfig = {
    apiKey: "AIzaSyDMVO0xI_bT98QyRZgGPvDIGS7G-3X3tjA",
    authDomain: "iot-w3-104ca.firebaseapp.com",
    databaseURL: "https://iot-w3-104ca-default-rtdb.firebaseio.com",
    projectId: "iot-w3-104ca",
    storageBucket: "iot-w3-104ca.appspot.com",
    messagingSenderId: "609348705098",
    appId: "1:609348705098:web:b82595c4fb1f7ecb233fb3",
    measurementId: "G-20J3QQ4TH2"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// ---------------------------------load data from firebase-------------------
//-----------------------------------Room1-------------------------------------
firebase.database().ref("/SmartHome/Room1/Light").once('value', function(snapshot){
  console.log(snapshot.val())
  if(snapshot.val()=="ON")
  {
    document.getElementById("toggle-light-room1").checked = true;
    document.getElementById('light-room1').style.backgroundColor = 'yellow';
  }
})

firebase.database().ref("/SmartHome/Room1/Cleaning_Robot").once('value', function(snapshot){
  console.log(snapshot.val())
  if(snapshot.val()=="ON")
  {
    document.getElementById("toggle-robot-room1").checked = true;
    document.getElementById('robot-room1').style.backgroundColor = 'yellow';
  }
})

firebase.database().ref("/SmartHome/Room1/Air_Conditioner").on('value', function(snapshot){
  console.log(snapshot.val())
  document.getElementById("my-input-room1").innerHTML = snapshot.val();
})


firebase.database().ref("/SmartHome/Room1/Fan").on('value', function(snapshot){
  if(snapshot.val()=="OFF")
    document.getElementById("value-0-room1").checked = true;
  if(snapshot.val()=="1")
    document.getElementById("value-1-room1").checked = true;
  if(snapshot.val()=="2")
    document.getElementById("value-2-room1").checked = true;
  if(snapshot.val()=="3")
    document.getElementById("value-3-room1").checked = true;
})


//----------------------------------Room2---------------------------------------
firebase.database().ref("/SmartHome/Room2/Light").once('value', function(snapshot){
  console.log(snapshot.val())
  if(snapshot.val()=="ON")
  {
    document.getElementById("toggle-light-room2").checked = true;
    document.getElementById('light-room2').style.backgroundColor = 'yellow';
  }
})

firebase.database().ref("/SmartHome/Room2/Cleaning_Robot").once('value', function(snapshot){
  console.log(snapshot.val())
  if(snapshot.val()=="ON")
  {
    document.getElementById("toggle-robot-room2").checked = true;
    document.getElementById('robot-room2').style.backgroundColor = 'yellow';
  }
})

firebase.database().ref("/SmartHome/Room2/Fan").on('value', function(snapshot){
  if(snapshot.val()=="OFF")
    document.getElementById("value-0-room2").checked = true;
  if(snapshot.val()=="1")
    document.getElementById("value-1-room2").checked = true;
  if(snapshot.val()=="2")
    document.getElementById("value-2-room2").checked = true;
  if(snapshot.val()=="3")
    document.getElementById("value-3-room2").checked = true;
})

//-------------------------------------------Room3--------------------------------------------
firebase.database().ref("/SmartHome/Room3/Light").once('value', function(snapshot){
  console.log(snapshot.val())
  if(snapshot.val()=="ON")
  {
    document.getElementById("toggle-light-room3").checked = true;
    document.getElementById('light-room3').style.backgroundColor = 'yellow';
  }
})

firebase.database().ref("/SmartHome/Room3/Fan").on('value', function(snapshot){
  if(snapshot.val()=="OFF")
    document.getElementById("value-0-room3").checked = true;
  if(snapshot.val()=="1")
    document.getElementById("value-1-room3").checked = true;
  if(snapshot.val()=="2")
    document.getElementById("value-2-room3").checked = true;
  if(snapshot.val()=="3")
    document.getElementById("value-3-room3").checked = true;
})

firebase.database().ref("/SmartHome/Room3/Air_Conditioner").on('value', function(snapshot){
  console.log(snapshot.val())
  document.getElementById("my-input-room3").innerHTML = snapshot.val();
})
// ------------load Temp and Hum and Wind-----------
firebase.database().ref("/SmartHome/Temp").on("value",function(snapshot){
  var Temp = snapshot.val();  
  document.getElementById("temperature").innerHTML = Temp;
});
// Get Hum form Fisebase (Auto load Temperature-------------------------)

firebase.database().ref("/SmartHome/Hum").on("value",function(snapshot){
  var Hum = snapshot.val();  
  document.getElementById("humidity").innerHTML = Hum;
  //console.log(Temperature);
});
firebase.database().ref("/SmartHome/Wind").on("value",function(snapshot){
  var Wind = snapshot.val();  
  document.getElementById("Wind").innerHTML = Wind;
  //console.log(Temperature);
});
// -----------------------------------------------------
// ---------------------update firebase---------------
// ------------------------Room 1------------------------
function status_light_room1(){
  var currentState = !document.getElementById("toggle-light-room1").checked;
  if(currentState)  
    document.getElementById('light-room1').style.backgroundColor = 'yellow';
  else
    document.getElementById('light-room1').style.backgroundColor = '';
  const lightRef = firebase.database().ref("/SmartHome/Room1/Light");
  lightRef.set(currentState?"ON":"OFF", function(error) {
      if (error) {
        console.error("Error updating light state: ", error);
      } else {
        console.log("Light state updated successfully!");
      }
    });
}

function status_air_room1(){
  
  var currentValue = document.getElementById("my-input-room1").innerHTML;
  console.log(currentValue)
  const lightRef = firebase.database().ref("/SmartHome/Room1")

  lightRef.update({
    "Air_Conditioner" : currentValue

  // }) function(error) {
  //   if (error) {
  //     console.error("Error updating light state: ", error);
  //   } else {
  //     console.log("Light state updated successfully!");
  //   }
  // };
})
}

function status_fan_room1(){
  var currentState;
  if(document.getElementById("value-0-room1").checked)
    currentState = "OFF";
  else if(document.getElementById("value-1-room1").checked)
    currentState = "1";
  else if(document.getElementById("value-2-room1").checked)
    currentState = "2";
  else if(document.getElementById("value-3-room1").checked)
    currentState = "3";
  console.log(currentState)
  const lightRef = firebase.database().ref("/SmartHome/Room1/Fan")

      lightRef.set(currentState, function(error) {
        if (error) {
          console.error("Error updating light state: ", error);
        } else {
          console.log("Light state updated successfully!");
        }
      });
}
function status_robot_room1(){
  var currentState = !document.getElementById("toggle-robot-room1").checked;
  if(currentState)  
  document.getElementById('robot-room1').style.backgroundColor = 'yellow';
  else
  document.getElementById('robot-room1').style.backgroundColor = '';
  const lightRef = firebase.database().ref("/SmartHome/Room1/Cleaning_Robot")   
  lightRef.set(currentState?"ON":"OFF", function(error) {
    if (error) {
      console.error("Error updating light state: ", error);
    } else {
      console.log("Light state updated successfully!");
    }
  });
}
// ---------------------------Room 2---------------------
function status_light_room2(){
  var currentState = !document.getElementById("toggle-light-room2").checked;
  if(currentState)  
    document.getElementById('light-room2').style.backgroundColor = 'yellow';
  else
    document.getElementById('light-room2').style.backgroundColor = '';
  const lightRef = firebase.database().ref("/SmartHome/Room2/Light");
  lightRef.set(currentState?"ON":"OFF", function(error) {
      if (error) {
        console.error("Error updating light state: ", error);
      } else {
        console.log("Light state updated successfully!");
      }
    });
}

function status_fan_room2(){
  var currentState;
  if(document.getElementById("value-0-room2").checked)
    currentState = "OFF";
  else if(document.getElementById("value-1-room2").checked)
    currentState = "1";
  else if(document.getElementById("value-2-room2").checked)
    currentState = "2";
  else if(document.getElementById("value-3-room2").checked)
    currentState = "3";
  console.log(currentState)
  const lightRef = firebase.database().ref("/SmartHome/Room2/Fan")

      lightRef.set(currentState, function(error) {
        if (error) {
          console.error("Error updating light state: ", error);
        } else {
          console.log("Light state updated successfully!");
        }
      });
}

function status_robot_room2(){
  var currentState = !document.getElementById("toggle-robot-room2").checked;
  if(currentState)  
  document.getElementById('robot-room2').style.backgroundColor = 'yellow';
  else
  document.getElementById('robot-room2').style.backgroundColor = '';
  const lightRef = firebase.database().ref("/SmartHome/Room2/Cleaning_Robot")   
  lightRef.set(currentState?"ON":"OFF", function(error) {
    if (error) {
      console.error("Error updating light state: ", error);
    } else {
      console.log("Light state updated successfully!");
    }
  });
}
// ---------------------------Room 3---------------------
function status_light_room3(){
  var currentState = !document.getElementById("toggle-light-room3").checked;
  if(currentState)  
    document.getElementById('light-room3').style.backgroundColor = 'yellow';
  else
    document.getElementById('light-room3').style.backgroundColor = '';
  const lightRef = firebase.database().ref("/SmartHome/Room3/Light");
  lightRef.set(currentState?"ON":"OFF", function(error) {
      if (error) {
        console.error("Error updating light state: ", error);
      } else {
        console.log("Light state updated successfully!");
      }
    });
}

function status_fan_room3(){
  var currentState;
  if(document.getElementById("value-0-room3").checked)
    currentState = "OFF";
  else if(document.getElementById("value-1-room3").checked)
    currentState = "1";
  else if(document.getElementById("value-2-room3").checked)
    currentState = "2";
  else if(document.getElementById("value-3-room3").checked)
    currentState = "3";
  console.log(currentState)
  const lightRef = firebase.database().ref("/SmartHome/Room3/Fan")

      lightRef.set(currentState, function(error) {
        if (error) {
          console.error("Error updating light state: ", error);
        } else {
          console.log("Light state updated successfully!");
        }
      });
}

function status_air_room3(){
  console.log(1);
  var currentValue = document.getElementById("my-input-room3").innerHTML;
  console.log(currentValue)
  const lightRef = firebase.database().ref("/SmartHome/Room3/Air_Conditioner")
  lightRef.set(currentValue, function(error) {
    if (error) {
      console.error("Error updating light state: ", error);
    } else {
      console.log("Light state updated successfully!");
    }
  });
}

//Chuyen qua lai giua cac phong
function livingroom(){
    document.getElementById("room1").style.display = "block";
    document.getElementById("room2").style.display = "none";
    document.getElementById("room3").style.display = "none";
    
  }
  function kitchen(){
    document.getElementById("room1").style.display = "none";
    document.getElementById("room2").style.display = "block";
    document.getElementById("room3").style.display = "none";
  }
 function bedroom(){
    document.getElementById("room1").style.display = "none";
    document.getElementById("room2").style.display = "none";
    document.getElementById("room3").style.display = "block";
 } 

 //------------BUTTON TEPPER-------------------
 //BUTTON STEPPER IN ROOM 1
 const myInput = document.getElementById("my-input-room1");
function stepper(btn){
    let id = btn.getAttribute("id");
    let min = myInput.getAttribute("min");
    let max = myInput.getAttribute("max");
    let step = myInput.getAttribute("step");
    let val = document.getElementById("my-input-room1").innerHTML;
    let calcStep = (id == "increment") ? (step*1) : (step * -1);
    let newValue = parseInt(val) + calcStep;

    if(newValue >= min && newValue <= max){
        document.getElementById("my-input-room1").innerHTML = newValue;
    }
}
 //BUTTON STEPPER IN ROOM 3
const myInput_3 = document.getElementById("my-input-room3");
function stepper_3(btn){
    let id = btn.getAttribute("id");
    let min = myInput_3.getAttribute("min");
    let max = myInput_3.getAttribute("max");
    let step = myInput_3.getAttribute("step");
    let val = document.getElementById("my-input-room3").innerHTML;
    let calcStep = (id == "increment-3") ? (step*1) : (step * -1);
    let newValue = parseInt(val) + calcStep;

    if(newValue >= min && newValue <= max){
      document.getElementById("my-input-room3").innerHTML = newValue;
    }
}