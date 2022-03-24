function addUser() {
    user_name = document.getElementById("user_name").ariaValueMax;
    localStorage.setItem("user_name", user_name);
    window.location= "kwitter_room.html";
}

row = "div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this:id)'>#"+Room_names+"<div><hr>";