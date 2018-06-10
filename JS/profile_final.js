let logOutBtn = document.getElementById('logOutBtn')
let profileInfo = document.querySelector('.profileInfo')
let muralDisplay = document.querySelector('.muralDisplay')
let muralName = document.getElementById('muralName')
let muralYear = document.getElementById('muralYear')
let muralLatitude = document.getElementById('muralLatitude')
let muralLongitude = document.getElementById('muralLongitude')
let muralPhoto = document.getElementById('muralPhoto')
let muralAdd = document.getElementById('muralAdd')

let usersRef = firebase.database().ref("users")

//setup Timeout to work with Firebase //
let user = null

let map = null

setTimeout(function(){
  user = firebase.auth().currentUser
  uid = user.uid
  setupUserObservers()
},1000)


function setupUserObservers() {
 usersRef.child(uid).on('value',function(snapshot){
    var uid = snapshot.val()
    populatePage(uid)

    if(uid.murals) {
      var indMural = []
      for(key in uid.murals) {

          var muralInformation = uid.murals[key]
          muralInformation.id = key

          indMural.push(muralInformation)
        }
        populateMural(indMural)
    }
  })
  }


// Google Maps //
function initMap(latitude, longitude, name) {

  console.log(latitude)
  console.log(longitude)


       var options = {
           zoom:10,
           center:{lat:29.7604,lng:-95.3698}
       }
   /* new map */
 if(map == undefined) {
    map = new google.maps.Map(document.getElementById('map'), options);
 }
  //var map = new google.maps.Map(document.getElementById('map'), options);



/* array of markers */
var markers = [

   {
       coords:{lat:latitude,lng:longitude},
       content:'<h1>'+name+'</h1>'

   },
];
/*loop though markers */
for(var i = 0; i < markers.length; i++){
   /* Add marker */
   addMarker(markers[i]);
}
   /* Add Marker Function */
   function addMarker(props){
       var marker = new google.maps.Marker({
           position:props.coords,
           map:map,
           icon:props.inconImage
       });
       if(props.iconImage){
           marker.setIcon(props.iconImage);
       }
       if(props.content){
           var infoWindow = new google.maps.InfoWindow({
               content:props.content
           });
           marker.addListener('click', function(){
               infoWindow.open(map,marker);
           });
       }
   }
}


// Add murals //

firebase.auth().onAuthStateChanged(function(user) {
    if(user){

muralAdd.addEventListener('click', function() {

  let wallName = muralName.value
  let wallYear = muralYear.value
  let wallLatitude = muralLatitude.value
  let wallLongitude = muralLongitude.value
  let wallPhoto = muralPhoto.value

  muralName.value = ''
  muralYear.value = ''
  muralLatitude.value = ''
  muralLongitude.value = ''
  muralPhoto.value = ''


usersRef.child(uid).child("murals").push({
        name : wallName,
        year : wallYear,
        latitude : wallLatitude,
        longitude : wallLongitude,
        photo : wallPhoto
    })

  })

}})

// delete murals //
function deleteMural(muralId) {
  usersRef.child(uid).child("murals").child(muralId).remove()
  // console.log(muralId)
}

// populate page with information from Firebase //
function populatePage(uid) {
  let userProfile = `<div class='picture'>
                      <img class='profilePic' src="${uid.imageURL}" alt="${uid.name}">
                      </div>
                      <div class="userDetail">
                        <div class="nameEmail">
                          <h2>Name: ${uid.name}</h2>
                          <p>Email: <a href="mailto:${uid.email}">${uid.email}</a></p>
                        </div>
                        <div class="info">
                          <p class="siteUrl">Website: <a href="${uid.url}">${uid.url}</a></p>
                          <p class="about">About Me: ${uid.about}</p>
                        </div>
                        </div>`

  profileInfo.innerHTML = userProfile
      }

function populateMural(indMural) {
  muralDisplay.innerHTML = ''
  indMural.forEach(function(indiMural) {
  let muralDetail = `
                    <div class='wallPicture'>
                    <img class='muralPic' src='${indiMural.photo}'>
                    </div>
                    <div class='wallDetail'>
                    <p class="muralName"><b>${indiMural.name}</b> </p>
                    <p>${indiMural.year}</p>
                    <p>Longitude: ${indiMural.longitude}</p>
                    <p>Latitude: ${indiMural.latitude}</p>
                    <button class="deletMuralBtn" onclick="deleteMural('${indiMural.id}')">Delete Mural</button>
                    </div>
                    `

  muralDisplay.innerHTML += muralDetail

  let latitude = Number(indiMural.latitude)
  let longitude = Number(indiMural.longitude)
  let name = indiMural.name

  initMap(latitude, longitude, name)

})

 }

// Log out button //
logOutBtn.addEventListener('click',function(){
  firebase.auth().signOut().then(function() {
  console.log('Signed Out');
  window.location = "index.html"
}), function(error) {
  console.error('Sign Out Error', error);
}
})
