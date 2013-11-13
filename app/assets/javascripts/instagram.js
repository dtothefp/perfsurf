/************ HELPER FUNCTIONS *********/

function createPhoto(responseObj){
  var imgElement = $('<img>').addClass('instagram-img').attr('src', responseObj.images.thumbnail.url);
  var aElement = $('<a>').attr({'href': responseObj.link, 'target': '_blank'}).append(imgElement);
  return $('<div>').addClass('instagram-placeholder').attr('id', responseObj.id).append(aElement);
}

function didLoadInstagram(event, response) {
    console.log(response);
    requestObj = response;
    var self = this;
    $.each(response.data, function(key, photo){
      $(self).append(createPhoto(photo));
    });
}

var locations = {
  "hawaii": [22.2062337, -159.5063759],
  "fiji": [-18.203262, 177.71759],
  "puerto-rico": [18.2953693, -67.2090722],
  "jeffreys-bay": [-34.0428347, 24.9260972]
}


/******** API LOOP FOR EACH LOCATION ********/
function loadInstagramPics(){
  $.each(locations, function(locationName, coordinates) {
    $('body').append(
      $('<div>').attr('id', locationName).addClass('instagram').append(
        $('<h1>').text(locationName.toUpperCase())
      )
    );
    $('div#' + locationName).on('willLoadInstagram', function(event, options) {
      console.log(options);
    });
    $('div#' + locationName).on('didLoadInstagram', didLoadInstagram);
    $('div#' + locationName).instagram({
      clientId: 'af9178fc04b54d41b6e36f525a682b5c', 
      accessToken: '29114238.af9178f.eb625902c4124fc3bbce8fdd196abe0b',
      search: {
        lat: coordinates[0],
        lng: coordinates[1],
        count: 6,
        distance: 3000
      }
    });
  });
}

/***** SINGLE LOCATION ********/

function loadInstagramPics(dataObj){
  // ???? How do you parse this
    var parsedObj = JSON.parse(dataObj);
    $('body').append(
      $('<div>').attr('id', locationName).addClass('instagram').append(
        $('<h1>').text(parsedObj.name.toUpperCase())
      )
    );
    $('div#' + locationName).on('willLoadInstagram', function(event, options) {
      console.log(options);
    });
    $('div#' + locationName).on('didLoadInstagram', didLoadInstagram);
    $('div#' + locationName).instagram({
      clientId: 'af9178fc04b54d41b6e36f525a682b5c', 
      accessToken: '29114238.af9178f.eb625902c4124fc3bbce8fdd196abe0b',
      search: {
        lat: parseObj.latitude,
        lng: parsedObj.longitude,
        count: 6,
        distance: 3000
      }
    });
}