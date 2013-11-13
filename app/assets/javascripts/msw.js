function createImageElements(responseObj, attribute){
  // console.log(responseObj);
  var parsedResponse = JSON.parse(responseObj);
  console.log(parsedResponse);
  $.each(parsedResponse, function(key, singleObj){
    var imgElement = $('<img>').attr('src', singleObj.charts[attribute]);
    $('#msw-data').append($('<div>').addClass('ms-img-placeholder').append(imgElement));
  });
}

function getSpotData(id, callback, attr){
  var site = 'http://magicseaweed.com/api/pGQx9a7IXwVYs3lIcQ8RV5E0y74Xmg9Y/forecast/?spot_id=' + id;
  var yql = 'http://query.yahooapis.com/v1/public/yql?q=' +
             encodeURIComponent('select * from html where url="' + site + '"') +
            '&format=json';
  console.log("AJAX REQ: " + yql);

  $.ajax({
        url: yql,
        type: "GET",
        dataType: "json"
      }).done(function(data){
        if (data.query.results === null) {
          console.log("results null");
          console.log(data); 
        } else{
          var responseData = data.query.results.body.p;
          callback(responseData, attr);
        }
      }).fail(function(jqXHR, textStatus, errorThrown){
        alert(errorThrown);
        console.log(textStatus);
  });
}
