let nameEmail = document.querySelector('.nameEmail')
let logOutBtn = document.getElementById('logOutBtn')
let siteUrl = document.querySelector('.siteUrl')
let about = document.querySelector('.about')
let detailBtn = document.getElementById('detailBtn')
let photo = document.querySelector('.photo')

let storage = firebase.storage()

let usersRef = firebase.database().ref("users")
//setup Timeout to work with Firebase //
let user = null

setTimeout(function(){
  user = firebase.auth().currentUser
  uid = user.uid
  setupObservers()
},1000)

//setup Observers //
function setupObservers() {
  usersRef.child(user.uid).on('value',function(snapshot){
    let uid = snapshot.val()
    populatePage(uid)
  })
}

// populate page with information from Firebase //
function populatePage(uid) {
  let userNameEmail = `<p>Name: ${uid.name}</p>
                      <p>Email: ${uid.email}</p>`
  nameEmail.innerHTML = userNameEmail
      }
// Upload photo //

// var fileButton = document.getElementById("fileButton");
//               fileButton.addEventListener('change', function(e){
//                   var file = e.target.files[0];
//                   var storageRef = firebase.storage().ref(file.name);
//                   storageRef.put(file);
//               });
//
// Add URL and About Me //

firebase.auth().onAuthStateChanged(function(user) {
    if(user){
detailBtn.addEventListener('click', function() {

  let url = siteUrl.value
  let aboutMe = about.value
  let imageURL = photo.value

  // siteUrl.value = ''
  // about.value = ''
  // photo.value = ''

usersRef.child(uid).update({
        about : aboutMe,
        url : url,
        imageURL : imageURL
    })
    window.location = "profile_final.html"
  })
}})


// Log out button //
logOutBtn.addEventListener('click',function(){
  firebase.auth().signOut().then(function() {
  console.log('Signed Out');
  window.location = "index.html"
}), function(error) {
  console.error('Sign Out Error', error);
}
})
