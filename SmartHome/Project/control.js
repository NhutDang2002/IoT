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
  firebase.initializeApp(firebaseConfig);
  database = firebase.database();
  document.getElementById("Radio-room1").checked = true;



//   ---------------------------------LOAD FROM FIREBASE---------------------
// ------------load Temp and Hum and Wind-----------
database.ref("/SmartHome/Room_Test/Temp").on("value",function(snapshot){
    var Temp = snapshot.val();  
    document.getElementById("temperature").innerHTML = String(Temp);
  });
  // Get Hum form Fisebase (Auto load Temperature-------------------------)
  
  firebase.database().ref("/SmartHome/Room_Test/Hum").on("value",function(snapshot){
    var Hum = snapshot.val();  
    document.getElementById("humidity").innerHTML = String(Hum);
    //console.log(Temperature);
  });
//   ------------------------------------load Air -------------------------------
database.ref("/SmartHome/Room_Test/Room1/Air").on('value', function(snapshot){
    console.log(snapshot.val())
    console.log(snapshot.val().time)
    valueButton = document.getElementById('value-air-room1')
    if(snapshot.val()== "OFF"){
        valueButton.style.backgroundColor = 'red';
    }
    else{
        valueButton.innerHTML = snapshot.val();
        valueButton.style.backgroundColor = 'green';
    }
})
database.ref("/SmartHome/Room_Test/Room3/Air").on('value', function(snapshot){
    console.log(snapshot.val())
    valueButton = document.getElementById('value-air-room3')
    if(snapshot.val()== "OFF"){
        valueButton.style.backgroundColor = 'red';
    }
    else{
        valueButton.innerHTML = snapshot.val();
        valueButton.style.backgroundColor = 'green';
    }
})
// -----------------------RoBot----------------
database.ref("/SmartHome/Room_Test/Room1/Robot").on('value', function(snapshot){
    console.log(snapshot.val())
    ref = document.getElementById("box-robot-room1").style
    if(snapshot.val() == "ON")
        ref.backgroundColor = 	"#00ffff";
    if(snapshot.val() == "OFF")
        ref.backgroundColor = "";
})
database.ref("/SmartHome/Room_Test/Room2/Robot").on('value', function(snapshot){
    console.log(snapshot.val())
    ref = document.getElementById("box-robot-room2").style
    if(snapshot.val() == "ON")
        ref.backgroundColor = 	"#00ffff";
    if(snapshot.val() == "OFF")
        ref.backgroundColor = "";
})
database.ref("/SmartHome/Room_Test/Room3/Robot").on('value', function(snapshot){
    console.log(snapshot.val())
    ref = document.getElementById("box-robot-room3").style
    if(snapshot.val() == "ON")
        ref.backgroundColor = 	"#00ffff";
    if(snapshot.val() == "OFF")
        ref.backgroundColor = "";
})
// ----------------------Kitchen hood---------------
database.ref("/SmartHome/Room_Test/Room2/Kitchen-hood").on('value', function(snapshot){
    console.log(snapshot.val())
    ref = document.getElementById("box-kitchen-room2").style
    if(snapshot.val() == "ON")
        ref.backgroundColor = 	"#00ffff";
    if(snapshot.val() == "OFF")
        ref.backgroundColor = "";
})
// ----------------------------Fan--------------------
database.ref("/SmartHome/Room_Test/Room1/Fan").on('value', function(snapshot){
    console.log(snapshot.val())
    switch(snapshot.val()){
        case "OFF":
            document.getElementById("Radio-room1-0").checked = true; break;
        case "1":
            document.getElementById("Radio-room1-1").checked = true; break;
        case "2":
            document.getElementById("Radio-room1-2").checked = true; break;
        case "3":
            document.getElementById("Radio-room1-3").checked = true; break;
    }
})
database.ref("/SmartHome/Room_Test/Room2/Fan").on('value', function(snapshot){
    console.log(snapshot.val())
    switch(snapshot.val()){
        case "OFF":
            document.getElementById("Radio-room2-0").checked = true; break;
        case "1":
            document.getElementById("Radio-room2-1").checked = true; break;
        case "2":
            document.getElementById("Radio-room2-2").checked = true; break;
        case "3":
            document.getElementById("Radio-room2-3").checked = true; break;
    }
})
database.ref("/SmartHome/Room_Test/Room3/Fan").on('value', function(snapshot){
    console.log(snapshot.val())
    switch(snapshot.val()){
        case "OFF":
            document.getElementById("Radio-room3-0").checked = true; break;
        case "1":
            document.getElementById("Radio-room3-1").checked = true; break;
        case "2":
            document.getElementById("Radio-room3-2").checked = true; break;
        case "3":
            document.getElementById("Radio-room3-3").checked = true; break;
    }
})
// -------------------------------Light------------------------
database.ref("/SmartHome/Room_Test/Room1/Light").on('value', function(snapshot){
    console.log(snapshot.val())
    var ref_image = document.getElementById("image-light-room1").style
    var ref_slider = document.getElementById("opacity-light-room1")
    if(snapshot.val() == "OFF")
    {   
        ref_image.opacity = "0.2";
        ref_slider.disabled = true;
    }
    else if(Number(snapshot.val())>= 40 && Number(snapshot.val())<=100)
    {   ref_slider.value = Number(snapshot.val())
        ref_image.opacity = 	ref_slider.value/100;
        ref_slider.disabled = false;
    }
})

database.ref("/SmartHome/Room_Test/Room2/Light").on('value', function(snapshot){
    console.log(snapshot.val())
    var ref_image = document.getElementById("image-light-room2").style
    var ref_slider = document.getElementById("opacity-light-room2")
    if(snapshot.val() == "OFF")
    {   
        ref_image.opacity = "0.2";
        ref_slider.disabled = true;
    }
    else if(Number(snapshot.val())>= 40 && Number(snapshot.val())<=100)
    {   ref_slider.value = Number(snapshot.val())
        ref_image.opacity = 	ref_slider.value/100;
        ref_slider.disabled = false;
    }
})

database.ref("/SmartHome/Room_Test/Room3/Light").on('value', function(snapshot){
    console.log(snapshot.val())
    var ref_image = document.getElementById("image-light-room3").style
    var ref_slider = document.getElementById("opacity-light-room3")
    if(snapshot.val() == "OFF")
    {   
        ref_image.opacity = "0.2";
        ref_slider.disabled = true;
    }
    else if(Number(snapshot.val())>= 40 && Number(snapshot.val())<=100)
    {   ref_slider.value = Number(snapshot.val())
        ref_image.opacity = 	ref_slider.value/100;
        ref_slider.disabled = false;
    }
})

// ----------------------------------------------------------------------------------

function check_fan(status,room){
    console.log(status)
    database.ref("/SmartHome/Room_Test/Room" + room + "/Fan").set(status)
}
function air(id,room){
    var valueButton = document.getElementById(id);
    var ref = "/SmartHome/Room_Test/Room" + room + "/Air"
    var currentColor = window.getComputedStyle(valueButton).backgroundColor;

    if (currentColor === 'rgb(0, 128, 0)') { // Kiểm tra màu nền hiện tại là màu xanh
        database.ref(ref).set("OFF")
        valueButton.style.backgroundColor = 'red'; // Thay đổi thành màu đỏ
    } else if (currentColor === 'rgb(255, 0, 0)') { // Kiểm tra màu nền hiện tại là màu đỏ
        valueButton.style.backgroundColor = 'green'; // Thay đổi thành màu xanh
        database.ref(ref).set(valueButton.innerHTML)
    }
}
function increase(id,room){
    var valueButton = document.getElementById(id);
    var ref = "/SmartHome/Room_Test/Room" + room + "/Air"
    currentColor = window.getComputedStyle(valueButton).backgroundColor;
    current_state = currentColor === 'rgb(0, 128, 0)'?"green":"red";
    current_value = Number(valueButton.innerHTML);
    if(current_state == "green" && current_value<30){
        valueButton.innerHTML = (current_value+1)
        database.ref(ref).set(String(current_value+1))
    }
}
function decrease(id,room){
    var valueButton = document.getElementById(id);
    var ref = "/SmartHome/Room_Test/Room" + room + "/Air"
    currentColor = window.getComputedStyle(valueButton).backgroundColor;
    current_state = currentColor === 'rgb(0, 128, 0)'?"green":"red";
    current_value = Number(valueButton.innerHTML);
    if(current_state == "green" && current_value>16){
        valueButton.innerHTML = (current_value-1)
        database.ref(ref).set(String(current_value-1))
    }
}
function change_background(btn,id,room,item){
    var ref_background = document.getElementById(id).style
    var ref_firebase = "/SmartHome/Room_Test/Room" + room + "/" + item
    if(btn.innerText == "ON")
        ref_background.backgroundColor = 	"#00ffff";
    if(btn.innerText == "OFF")
        ref_background.backgroundColor = "";
    database.ref(ref_firebase).set(btn.innerText)
}
function change_light(btn,id_image,id_opacity,room){
    var ref_image = document.getElementById(id_image).style
    var ref_slider = document.getElementById(id_opacity)
    var ref_firebase = "/SmartHome/Room_Test/Room" + room + "/Light"
    if(btn.innerText == "ON"){
        ref_image.opacity = 	ref_slider.value/100;
        ref_slider.disabled = false;
        database.ref(ref_firebase).set(String(ref_slider.value))
        console.log(ref_slider.value)
    }
    if(btn.innerText == "OFF"){
        ref_image.opacity = "0.2";
        ref_slider.disabled = true;
        database.ref(ref_firebase).set("OFF")
    }
}
function change_opacity(id_image,id_opacity,room){
    ref_image = document.getElementById(id_image).style
    ref_slider = document.getElementById(id_opacity)
    var ref_firebase = "/SmartHome/Room_Test/Room" + room + "/Light"
    ref_image.opacity = ref_slider.value/100;
    database.ref(ref_firebase).set(String(ref_slider.value))
    //console.log(ref_slider.value)
}
function change_room(btn){
    var id_room = btn.getAttribute("id");
    if(id_room != "Radio-room1")
        document.getElementById("room1").style.display = "none";
    else
        document.getElementById("room1").style.display = "flex";
    if(id_room != "Radio-room2")
        document.getElementById("room2").style.display = "none";
    else
        document.getElementById("room2").style.display = "flex";
    if(id_room != "Radio-room3")
        document.getElementById("room3").style.display = "none";
    else
        document.getElementById("room3").style.display = "flex";
}