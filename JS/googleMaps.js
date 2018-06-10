let map = null

setTimeout(function(){
  setupMapObservers()
},500)

function setupMapObservers() {
  usersRef.on('value',function(snapshot){
    let uid = snapshot.val()

    var indMap = []

    for(let user in uid) {
      let userCat = uid[user].murals
      // console.log(userCat)
        for(let mural in userCat) {
          var mapInformation = userCat[mural]

          indMap.push(mapInformation)
        }
      }
      populateMap(indMap)
    })
  }



// Google Maps //
function initMap(latitude, longitude, name, wallURL) {

       var options = {
           zoom:12,
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
       content:'<h1 style="text-align: center">'+name+'</h1><img style="text-align:center" height=125px width= 125px src="'+wallURL+'"><p>Latitude: '+latitude+'</p><p>Longitude: '+longitude+'</p>'
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

function populateMap(indMap) {
  indMap.forEach(function(indiMap) {

    var latitude = Number(indiMap.latitude)
    var longitude = Number(indiMap.longitude)
    var name = indiMap.name
    var wallURL = indiMap.photo
    initMap(latitude,longitude,name,wallURL)
  })
}
