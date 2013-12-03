/************ HELPER FUNCTIONS *********/


// CALLED INSIDE didLoadInstagram -- BUILDS IMAGE PLACEHOLDERS AND ANCHOR TAGS
function createPhoto(responseObj){
  var imgElement = $('<img>').addClass('instagram-img').attr('src', responseObj.images.thumbnail.url);
  var aElement = $('<a>').attr({'href': responseObj.link, 'target': '_blank'}).append(imgElement);
  return $('<div>').addClass('instagram-placeholder').attr('id', responseObj.id).append(aElement);
}

// CALLED INSIDE loadLocation -- APPENDS IMAGES TO DOM
function didLoadInstagram(event, response) {
    console.log(response);
    requestObj = response;
    var self = this;
    $.each(response.data, function(key, photo){
      $(self).append(createPhoto(photo));
    });
}

// CONNECT TO INSTAGRAM API AND LOAD IMAGES -- THIS IS THE CALLBACK FUNCTION
function loadLocation(response){
  // Create location div
  var locationDiv = $('<div>').attr('id', response.name).appendTo($('#location'));
  // $(locationDiv).append(
  //   $('<div>').attr('id', response.name).addClass('instagram').append(
  //     $('<h1>').text(response.name.toUpperCase())
  //   )
  // );
  $(locationDiv).on('willLoadInstagram', function(event, options) {
    console.log(options);
  });
  $(locationDiv).on('didLoadInstagram', didLoadInstagram);
  $(locationDiv).instagram({
    clientId: 'af9178fc04b54d41b6e36f525a682b5c',
    accessToken: '29114238.af9178f.eb625902c4124fc3bbce8fdd196abe0b',
    search: {
      lat: response.latitude,
      lng: response.longitude,
      count: 6,
      distance: 3000
    }
  });
}


 