function getPerfSurfLocation(id, callback){

$.ajax({
        url: "/json/locations/" + id,
        type: "GET",
        dataType: "json"
      }).done(function(data){
        console.log(data);
        callback(data);
      }).fail(function(jqXHR, textStatus, errorThrown){
        alert(errorThrown);
        console.log(textStatus);
  });
}