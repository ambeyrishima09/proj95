
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAbjMxQeBD8ly46Kcay5ZNh-JKLKiJ5fhw",
      authDomain: "classtest-99cb9.firebaseapp.com",
      projectId: "classtest-99cb9",
      storageBucket: "classtest-99cb9.appspot.com",
      messagingSenderId: "379207061564",
      appId: "1:379207061564:web:e4fd4b4c519be07f59b339",
      measurementId: "G-7CJSTRZQ7S"
    };
    
    // Initialize Firebase
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
    
 user_name = localStorage.getItem("user_name");
 
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
 
 function addRoom()
 {
   room_name = document.getElementById("room_name").value;
 
   firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
   });
 
     localStorage.setItem("room_name", room_name);
     
     window.location = "kwitter_page.html";
 }
 
 function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
     });
   });
 
 
 
 getData();
 
 function redirectToRoomName(name)
 {
   console.log(name);
   localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
 }
 
 function logout() {
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
     window.location = "kwitter(1).html";
 }
}