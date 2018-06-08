function initMap() {
  var options = {
      zoom:13,
      center:{lat:29.7604,lng:-95.3698}
  }

/* new map */
var map = new google.maps.Map(document.getElementById('map'), options);

/* array of markers */
var markers = [
  {
      coords:{lat:29.753049,lng:-95.338860}, /*Digital Crafts*/
      iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      content:'<h1>Digical Crafts/HQ</h1>'
  },
  {
      coords:{lat:29.754775,lng:-95.338336},
      content:'<h1>Paper Planes</h1>'
  },
  {
      coords:{lat:29.734855,lng:-95.375875},
      content:'<h1>Angry Houses</h1>'
  },
  {
      coords:{lat:29.747415,lng:-95.359449},
      content:'<h1>UH</h1>'
  },
  {
      coords:{lat:29.760968,lng:-95.344731},
      content:'<h1>YO CREO Building</h1>'
  },
  {
      coords:{lat:29.761183,lng:-95.344564},
      content:'<h1>Meta-Eagle</h1>'
  },
  {
      coords:{lat:29.748755,lng:-95.356701},
      content:'<h1>Basquiat & Warhol</h1>'
  },
  {
      coords:{lat:29.743492,lng:-95.333628},
      content:'<h1>Houston TX</h1>'
  },
  {
      coords:{lat:29.744252,lng:-95.334057},
      content:'<h1>18 Wheeler Trailer</h1>'
  },
  {
      coords:{lat:29.753048,lng:-95.348154},
      content:'<h1>Under Bridge</h1>'
  },
  {
      coords:{lat:29.746554,lng:-95.358533},
      content:'<h1>Grandma</h1>'
  },
  {
      coords:{lat:29.747411,lng:-95.359260},
      content:'<h1>UGK</h1>'
  },
  {
      coords:{lat: 29.747596,lng:-95.358753},
      content:'<h1>Medusa</h1>'
  },
  {
      coords:{lat:29.750954,lng:-95.365721},
      content:'<h1>Space</h1>'
  },
  {
      coords:{lat:29.750838,lng: -95.365367},
      content:'<h1>Harambe</h1>'
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
