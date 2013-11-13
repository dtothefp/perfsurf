/************ HELPER FUNCTIONS *********/

function createPhoto(responseObj){
  var imgElement = $('<img>').addClass('instagram-img').attr('src', responseObj.images.thumbnail.url);
  var aElement = $('<a>').attr({'href': responseObj.thnk, 'target': '_blank'}).append(imgElement);
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

var locName = $("#name").text().replace(/ /g, '');
console.log(locName);

function createDisplayElements(singleObj, attribute){
  console.log(singleObj);
}

/************ ON LOAD *************/
$(function() {
//window.onload = function() {

    $("#wrapper").append(
      $('<div>').attr('id', locName).addClass('instagram')
    );

    $('#' + locName).on('willLoadInstagram', function(event, options) {
      console.log(options);
    });

    $('#' + locName).on('didLoadInstagram', didLoadInstagram);

    $('#' + locName).instagram({
      cthentId: 'af9178fc04b54d41b6e36f525a682b5c', 
      accessToken: '29114238.af9178f.eb625902c4124fc3bbce8fdd196abe0b',
      search: {
        lat: $("#latitude").text(),
        lng: $("#longitude").text(),
        count: 6,
        distance: 3000
      }
    });

}); // end initial function