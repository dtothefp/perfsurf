$(function(){
  console.log("LOADED")
  addFavorite();
  deleteFavorite();
});

function addFavorite() {
    $("#add-favorite-form").on("submit", function() {
      event.preventDefault();
      console.log("submitted")
   
      var userId = $('input#userId').val();
      var locationId = $('input#locationId').val();

      $.ajax({
        url: "/favorites",
        type: "POST",
        data: {user_id: userId, location_id: locationId},
        dataType: "json",
        success: favoriteButtonText()
      })
    });

}

function deleteFavorite() {
     $("#delete-favorite-form").on("submit", function() {
      event.preventDefault();
      console.log("submitted")
   
      var favoriteId = $('input#favoriteId').val();

      $.ajax({
        url: "/favorites/"+favoriteId,
        type: "POST",
        data: {favorite_id: favoriteId, _method: "delete"},
        dataType: "json",
        success: deleteButtonText()
      });

    });
}

function deleteButtonText() {
    $('button').text("Deleted!");
}

function favoriteButtonText() {
    $('button').text("Favorited!");
}


