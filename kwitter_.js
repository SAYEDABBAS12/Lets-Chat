
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyDB3fR6dAewojQsHS21epcPbn8PQ5phuDU",
    authDomain: "lets-chat-6cc14.firebaseapp.com",
    databaseURL: "https://lets-chat-6cc14-default-rtdb.firebaseio.com",
    projectId: "lets-chat-6cc14",
    storageBucket: "lets-chat-6cc14.appspot.com",
    messagingSenderId: "901125621359",
    appId: "1:901125621359:web:96cf7d88adb1ae8d55af9a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   user_name = localStorage.getItem("user_name", user_name);
   document.getElementById("user_name").innerHTML = "Welcome "+ user_name +"!";
   function addRoom()
   {
     room_name = document.getElementById("room_name").value;

     firebase.database().ref("/").child(room_name).update({
       purpose: "Adding Room Name"});
       localStorage.setItem("room_name", room_name);
       window.location = "kwitter_page.html";
   }

   function getData()
   {
     firebase.database().ref("/").on('value', function(snapshot){document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot){ childKey = childSnapshot.key;

    room_names = childKey;
    console.log("Room name", room_names);
    row = "<div class='room_name' id="+room_names+" onclick='redirectToRoomName(this.id)'>#"+room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
   });});
 }
   //End code
   });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location ="kwitter_page.html";
}

