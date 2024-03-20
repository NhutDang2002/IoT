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
   const auth = firebase.auth();
   const database = firebase.database();
   console.log(auth);
function register () {
// Get all our input fields
// var auth = firebase.auth();
// var database = firebase.database();
console.log(auth);
var email = document.getElementById('email').value
var password = document.getElementById('password').value
console.log(email);
console.log(password);
// Validate input fields
if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
    // Don't continue running the code
}


// Move on with Auth
auth.createUserWithEmailAndPassword(email, password)
.then(function() {
    // Declare user variable

    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
    email : email,
    last_login : Date.now()
    }
    console.log(user_data);

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).set(user_data)

    // DOne
    alert('User Created!!')
})
.catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
})
}

// Set up our login function
function login() {
// Get all our input fields

// var auth = firebase.auth();
// var database = firebase.database();
var email = document.getElementById('email').value
var password = document.getElementById('password').value

// Validate input fields
if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
    // Don't continue running the code
}

auth.signInWithEmailAndPassword(email, password)
.then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
    last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).update(user_data)

    // DOne
    window.location.assign("index.html")
    alert("Login Successfully")

})
.catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
})
}




// Validate Functions
function validate_email(email) {
expression = /^[^@]+@\w+(\.\w+)+\w$/
if (expression.test(email) == true) {
    // Email is good
    return true
} else {
    // Email is not good
    return false
}
}

function validate_password(password) {
// Firebase only accepts lengths greater than 6
if (password < 6) {
    return false
} else {
    return true
}
}

function validate_field(field) {
if (field == null) {
    return false
}

if (field.length <= 0) {
    return false
} else {
    return true
}
}