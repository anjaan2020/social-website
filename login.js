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

function addUser(){
localStorage.setItem("user_name",user_name);

    window.location = "main_page.html";
}
