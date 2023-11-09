// ADICIONE SUS LINKS FIREBASE AQUI
var firebaseConfig = {
  apiKey: "AIzaSyARZiCqntU4pwT8HgzbuQhxTy5qDZH_kJ4",
  authDomain: "testeconversa-b1bc5.firebaseapp.com",
  projectId: "testeconversa-b1bc5",
  storageBucket: "testeconversa-b1bc5.appspot.com",
  messagingSenderId: "1036602515872",
  appId: "1:1036602515872:web:140226f3f4166c57d744c5"
};
      
      
      
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      
      
      function addUser()
      {
        userName = document.getElementById("userName").value;
        firebase.database().ref("/").child(userName).update({
          purpose : "adding user"
        });
      }
      