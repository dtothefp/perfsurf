// var windCircle;

// function initialize() {
//   // Create the map.
//   var mapOptions = {
//     zoom: 2,
//     center: new google.maps.LatLng(30.3617765, -32.3111727),
//     mapTypeId: google.maps.MapTypeId.EARTH
//   };

//   var map = new google.maps.Map(document.getElementById('map-canvas'),
//       mapOptions);

//   // Construct the circle for each value in citymap.
//   // Note: We scale the population by a factor of 20.
//   var counter = 1;
//   $.each(circleOptionsGroup, function(locationName, options){
//     $.each(options, function(key, value){
//       var locationLatLng = new google.maps.LatLng(parseFloat(value.latitude), parseFloat(value.longitude));
//       var circleOptions = {
//         strokeColor: '#ffffff',
//         strokeOpacity: 0.8,
//         strokeWeight: 2,
//         fillColor: '#FF0000',
//         fillOpacity: 0.35,
//         map: map,
//         center: locationLatLng,
//         radius: 40000 * value.wind.speed/2
//       };
//         console.log(locationName);
//         console.log(value.wind.speed);
//         if ( value.wind.speed < 15) {
//           circleOptions.fillColor = '#00FF0C';
//         } else if ( value.wind.speed >= 15 && value.wind.speed <= 25 ) {
//           circleOptions.fillColor = '#FCFF00';
//         } else { 
//           circleOptions.fillColor = '#FF0600';
//         }

//       // Add the circle for this city to the map.
//       windCircle = new google.maps.Circle(circleOptions);
//       google.maps.event.addListener(windCircle, 'click', function() {
//         window.open("/locations/" + value.id, "_self");
//       });
//       google.maps.event.addListener(windCircle, 'mouseover', function() {
//         if ( counter != 1 ) {
//           $(this).css("display", "none");
//         }
//       });

//       //        var markerOptions = {
// //           position: locationLatLng,
// //           title: "timestamp-" + counter,
// //           icon: {
// //             path: google.maps.SymbolPath.CIRCLE,
// //             scale: 2 * value.wind.speed/2,
// //             fillColor: 'fff000',
// //             fillOpacity: '0.5',
// //             strokeColor: 'fff000',
// //             strokeWeight: 2,
// //             strokeOpacity: 0.5
// //           },
// //           draggable: false,
// //           map: map,
// //         };


// //         if ( value.wind.speed < 15) {
// //           markerOptions.icon.fillColor = '#00FF0C';
// //         } else if ( value.wind.speed >= 15 && value.wind.speed <= 25 ) {
// //           markerOptions.icon.fillColor = '#FCFF00';
// //         } else { 
// //           markerOptions.icon.fillColor = '#FF0600';
// //         }

// //         var marker = new google.maps.Marker(markerOptions);
// //         marker.set('id', 1);
// //        google.maps.event.addListener(marker, 'click', function() {
// //         window.open("/locations/" + value.id, "_self");
// //       });
// //     });
// //   counter ++
// //   });
// // }

// // Positive north of the Equator
//       // Negative south of the Equator

//       // if ( lastSwLat < 0 ) {
//       //   // negative lat + negative wind increases circle size
//       //   if ( lastWind < wind ) {
//       //     var swBoundLat = ( lastSwLat - wind );
//       //   // negative lat + negative wind decrease
//       //   } else{
//       //     var swBoundLat = ( lastSwLat + wind );
//       //   }
//       // } else if ( lastSwLat >= 0 ) {
//       //    if ( lastWind < wind ) {
//       //     var swBoundLat = ( lastSwLat + wind );
//       //   } else{
//       //     var swBoundLat = ( lastSwLat - wind );
//       //   }
//       // }

//       // if ( lastNeLat < 0 ) {
//       //   if ( lastWind < wind ) {
//       //     var neBoundLat = ( lastNeLat + wind );
//       //   } else {
//       //     var neBoundLat = ( lastNeLat - wind );
//       //   }
//       // } else if ( lastNeLat >= 0 ) {
//       //    if ( lastWind < wind ) {
//       //     var neBoundLat = ( lastNeLat + wind );
//       //   } else{
//       //     var neBoundLat = ( lastNeLat - wind );
//       //   }
//       // }

//       // if ( lastSwLng < 0 ) {
//       //   if ( lastWind < wind ) {
//       //     var swBoundLng = ( lastSwLng - wind );
//       //   } else {
//       //     var swBoundLng = ( lastSwLng + wind );
//       //   }
//       // } else if ( lastSwLng >= 0 ) {
//       //    if ( lastWind < wind ) {
//       //     var swBoundLng = ( lastSwLng - wind );
//       //   } else {
//       //     var swBoundLng = ( lastSwLng + wind );
//       //   }
//       // }

//       // if ( lastNeLng < 0 ) {
//       //   if ( lastWind < wind ) {
//       //     var neBoundLng = ( lastNeLng + wind );
//       //   } else {
//       //     var neBoundLng = ( lastNeLng - wind );
//       //   }
//       // } else if ( lastSwLng >= 0 ) {
//       //    if ( lastWind < wind ) {
//       //     var neBoundLng = ( lastNeLng + wind );
//       //   } else {
//       //     var neBoundLng = ( lastNeLng - wind );
//       //   }
//       // }

//       // lastSwLat = swBoundLat;
//       // lastNeLat = neBoundLat;
//       // lastSwLng = swBoundLng;
//       // lastNeLng = neBoundLng;
//       // lastWind = wind;

//       // // SW Lat = less
//       // // SW Long = more
//       // // NE Lat = more
//       // // NE Long = less

//       // more if statements
//          if ( lastSwLat < 0 ) {
//         // negative lat + negative wind increases circle size
//           var swBoundLat = ( lastSwLat - wind );
//         // negative lat + negative wind decrease
//           var swBoundLat = ( lastSwLat + wind );
//       } else if ( lastSwLat >= 0 ) {
//           var swBoundLat = ( lastSwLat + wind );
//           var swBoundLat = ( lastSwLat - wind );
//       }

//         if ( lastNeLat < 0 ) {
//           var neBoundLat = ( lastNeLat + wind );
//           var neBoundLat = ( lastNeLat - wind );
//       } else if ( lastNeLat >= 0 ) {
//           var neBoundLat = ( lastNeLat + wind );
//           var neBoundLat = ( lastNeLat - wind );
//       }

//       if ( lastSwLng < 0 ) {
//           var swBoundLng = ( lastSwLng - wind );
//           var swBoundLng = ( lastSwLng + wind );
//       } else if ( lastSwLng >= 0 ) {
//           var swBoundLng = ( lastSwLng - wind );
//           var swBoundLng = ( lastSwLng + wind );
//       }

//       if ( lastNeLng < 0 ) {
//           var neBoundLng = ( lastNeLng + wind );
//           var neBoundLng = ( lastNeLng - wind );
//       } else if ( lastSwLng >= 0 ) {
//           var neBoundLng = ( lastNeLng + wind );
//           var neBoundLng = ( lastNeLng - wind );
//       }

      

//       // // The photograph is courtesy of the U.S. Geological Survey.
//       // var srcImage = 'https://developers.google.com/maps/documentation/javascript/';
//       // srcImage += 'examples/full/images/talkeetna.png';


//        // this goes inside the loop for creating a marker and overlay
//       var marker = new Marker({
//                     map: map,
//                     zIndex: 9,
//                     title: 'Map Icons',
//                     position:  new google.maps.LatLng(lat, lng),
//                     icon: {
//                             path: MAP_PIN,
//                             fillColor: '#0E77E9',
//                             fillOpacity: 1,
//                             strokeColor: '',
//                             strokeWeight: 0,
//                             scale: 1/2
//                     },
//                     label: '<i class="map-icon-walking"></i>'
//                   }, locationName, value);



//       /// Map icons code 
//       // Location is the location name, stats are the associate stats for each timestamp
// var Marker = function(optionsObj, location, stats) {
//   google.maps.Marker.apply(this, arguments);
//   if (optionsObj.label) {
//     this.CircleOverlay = new CircleOverlay({
//       map: this.map,
//       marker: this,
//       text: optionsObj.label
//       locationName: location,
//       timestampStats: timestampStats
//     });
//     this.CircleOverlay.bindTo('position', this, 'position');
//   }
// };

// Marker.prototype = new google.maps.Marker();

// // Custom Marker SetMap
// Marker.prototype.setMap = function() {
//   google.maps.Marker.prototype.setMap.apply(this, arguments);
//   (this.CircleOverlay) && this.CircleOverlay.setMap.apply(this.CircleOverlay, arguments);
// };

// // Define Marker Label Object/Class
// // Marker Label Overlay
// var CircleOverlay = function(options) {
//   var self = this;
//   this.setValues(options);
  
//   // Create the label container
//   this.div = document.createElement('div');
//   this.div.className = 'marker-label';
//   var span = document.createElement('span');
//   span.className = "marker-icon";
//   this.div.appendChild(span);
 
//   // Trigger the marker click handler if clicking on the label
//   google.maps.event.addDomListener(this.div, 'click', function(e){
//     (e.stopPropagation) && e.stopPropagation();
//     google.maps.event.trigger(self.marker, 'click');
//   });
// };