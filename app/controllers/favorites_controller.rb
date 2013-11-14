class FavoritesController < ApplicationController

def create
  favorite = Favorite.new(favorite_params)

  if favorite.save(favorite_params)
      render json: favorite
  else
      render status: 400, nothing: true
  end
end

def destroy 
  favorite = Favorite.find(favorite_delete_params["favorite_id"])

  if Favorite.destroy(favorite)
    render json: favorite
  else
    render status: 400, nothing: true
  end
end

private

def favorite_params
  params.permit(:user_id, :location_id)
end

def favorite_delete_params
  params.permit(:favorite_id)
end

end