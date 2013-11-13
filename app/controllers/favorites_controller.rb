class FavoritesController < ApplicationController

def create
  favorite = Favorite.new(favorite_params)
  favorite.save

  if favorite.save(favorite_params)
      render json: favorite
    else
      render status: 400, nothing: true
    end
end

private

def favorite_params
  params.permit(:user_id, :location_id)
end


end