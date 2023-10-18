
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVteZsCv6nHE9KLkqF6aDtg0dqVqjMGcQ",
  authDomain: "kwitter-b4761.firebaseapp.com",
  databaseURL: "https://kwitter-b4761-default-rtdb.firebaseio.com",
  projectId: "kwitter-b4761",
  storageBucket: "kwitter-b4761.appspot.com",
  messagingSenderId: "1026712870432",
  appId: "1:1026712870432:web:083c3e988281ce8f666645"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

function send(){
msg= document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0,
});
msg= document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inicia código
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}
//Termina código
      } });  }); }
getData();

