
    function signin()
    {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday,email');
    firebase.auth().useDeviceLanguage();
    firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  document.querySelector("#sign-out").style.display="block";
  console.log(user);
  var user = result.user;
  console.log(user.email);
  var userImage = document.querySelector("#user-image");

  // appending the user profile image

  var userPic = document.createElement("img");
  userPic.src=user.photoURL;
  userImage.append(userPic);

  // appending the user email address

  var userEmail = document.querySelector("#user-email");
  userEmail.innerHTML = user.email;

  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

    }