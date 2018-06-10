let signupbtn = document.querySelector('.signupbtn')
let nameTextBox = document.getElementById('nameTextBox')
let emailTextBox = document.getElementById('emailTextBox')
let passwordTextBox = document.getElementById('passwordTextBox')
let categoryOption = document.getElementById('category')
let loginID = document.getElementById('loginID')

let myModalSignIn = document.querySelector('.myModalSignIn')
let modalBtnSignIn = document.querySelector('.modalBtnSignIn')
var spanSignIn = document.getElementsByClassName('closeSignIn')[0];

let myModalSignUp = document.querySelector('.myModalSignUp')
let modalBtnSignUp = document.querySelector('.modalBtnSignUp')
var spanSignUp = document.getElementsByClassName('closeSignUp')[0];

let btnLogin = document.getElementById('btnLogin')
let loginPass = document.getElementById('loginPass')



var usersRef = firebase.database().ref("users")

// Sign Up //
if(signupbtn) {
signupbtn.addEventListener('click',function(){

  let name = nameTextBox.value
  let email = emailTextBox.value
  let password = passwordTextBox.value
  let category = categoryOption.value

  nameTextBox.value = ''
  emailTextBox.value = ''
  passwordTextBox.value = ''

  firebase.auth().createUserWithEmailAndPassword(email,password)
  .then(function(user) {
      var uid = firebase.auth().currentUser.uid

      usersRef.child(uid).set({
        name : name,
        email : email,
        category : category,
        murals : []
      })
      //window.location = "profile.html"
  }).catch(function(error){
    alert(error)

})

firebase.auth().onAuthStateChanged(function(user) {
    if(user){
        window.location = "profile.html"
}
})

})
}


// Sign In //
if(btnLogin) {
btnLogin.addEventListener('click',function(){

  let email = loginID.value
  let password = loginPass.value

  loginID.value = ''
  loginPass.value = ''

  firebase.auth().signInWithEmailAndPassword(email,password)
  .then(function(response){
    let user = response.user
    if(user) {
      let uid = firebase.auth().currentUser.uid
     window.location = "profile_final.html"
  }}).catch(function(error) {
    alert("Your email/password combination does not match.")
  })
})
}

// SignUp Modal //

// When the user clicks the button, open the modal
modalBtnSignUp.onclick = function() {
    myModalSignUp.style.display = "flex";
}

spanSignUp.onclick = function() {
    myModalSignUp.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == myModalSignUp) {
        myModalSignUp.style.display = "none";
    }
}

// SignIn Modal //

// When the user clicks the button, open the modal
modalBtnSignIn.onclick = function() {
    myModalSignIn.style.display = "flex";
}

spanSignIn.onclick = function() {
    myModalSignIn.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == myModalSignIn) {
    myModalSignIn.style.display = "none";
    }
}
