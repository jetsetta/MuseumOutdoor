let signupbtn = document.querySelector('.signupbtn')
let nameTextBox = document.getElementById('nameTextBox')
let emailTextBox = document.getElementById('emailTextBox')
let passwordTextBox = document.getElementById('passwordTextBox')
let categoryOption = document.getElementById('category')
let loginID = document.getElementById('loginID')

let loginbtn = document.getElementById('btnLogin')
let loginPass = document.getElementById('loginPass')



let usersRef = firebase.database().ref("users")

// Sign Up //
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



// Sign In //
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
