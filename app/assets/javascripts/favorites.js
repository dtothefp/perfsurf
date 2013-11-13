$(function(){
  console.log("LOADED")
  addFavorite();
});

function addFavorite() {
  $("#favorite-form").on("submit", function() {
    event.preventDefault();
    console.log("submitted")
 
    var userId = $('input#userId').val();
    var locationId = $('input#locationId').val();

    $.ajax({
      url: "/favorites",
      type: "POST",
      data: {user_id: userId, location_id: locationId},
      dataType: "json"
    })
  });


}