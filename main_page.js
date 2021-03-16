var firebaseConfig = {
  apiKey: "AIzaSyCfizEOMbwcbZFtCjJI0YezTlL46dx_8-g",
  authDomain: "social-website-a2c56.firebaseapp.com",
  databaseURL: "https://social-website-a2c56-default-rtdb.firebaseio.com",
  projectId: "social-website-a2c56",
  storageBucket: "social-website-a2c56.appspot.com",
  messagingSenderId: "577988341445",
  appId: "1:577988341445:web:3d9e77c0054e2068c4caac",
  measurementId: "G-HNH8X6N3Q6"
};

firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  
    localStorage.setItem("room_name", room_name);
    
    window.location = "room.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  localStorage.setItem("room_name", name);
    window.location = "room.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
