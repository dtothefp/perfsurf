class LocationsController < ApplicationController

  def new
    
  end

  def index 
    @locations = Location.all
    render :index
  end

  def show
    @location = Location.find(params[:id])
    @user = User.find(session[:user_id])
    @responses = Response.new( HTTParty.get("http://magicseaweed.com/api/pGQx9a7IXwVYs3lIcQ8RV5E0y74Xmg9Y/forecast/?spot_id=" + @location.msw_id.to_s ) )
    @stats = @responses.timestamp_to_object
    binding.pry
  end

end