function getPerfSurfLocation(id, callback){

$.ajax({
        url: "/json/locations/" + id,
        type: "GET",
        dataType: "json"
      }).done(function(data){
        // console.log(data);
        callback(data);
      }).fail(function(jqXHR, textStatus, errorThrown){
        alert(errorThrown);
        alert("Perf Surf API failed to connect")
        console.log(textStatus);
  });
} 