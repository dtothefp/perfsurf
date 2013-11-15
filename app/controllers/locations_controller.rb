class LocationsController < ApplicationController

  def new
    
  end

  def index 

    locations = Location.all
    @top_level_arr = []
    locations.each do |location|
      geometry_hash = {}
      coordinates_hash = {}
      responses = HTTParty.get("http://magicseaweed.com/api/pGQx9a7IXwVYs3lIcQ8RV5E0y74Xmg9Y/forecast/?spot_id=" + location.msw_id.to_s )
      responses.each do |response|
        coordinates_hash = {"coordinates" => [location.longitude, location.latitude], "type" => "Point", "wind" => response["wind"]["speed"], "wave" => response["swell"]["components"]["primary"]["height"], "timestamp" => Time.at(response["timestamp"]).strftime("%A, %b %e, %l%p"), "name" => location.name, "location_id" => location.id }
        geometry_hash["geometry"] = coordinates_hash
        @top_level_arr << geometry_hash
      end
    end
    if logged_in?
      @locations = Location.all
      render :index
    else
      redirect_to new_session_path
    end
  end

  def show
    @location = Location.find(params[:id])
    @user = User.find(session[:user_id])
    @responses = Response.new( HTTParty.get("http://magicseaweed.com/api/pGQx9a7IXwVYs3lIcQ8RV5E0y74Xmg9Y/forecast/?spot_id=" + @location.msw_id.to_s ) )
    @msw = @responses.get_http_obj
    @chart_array = @responses.get_chart_data.to_json
    @stats = @responses.timestamp_to_object
  end

end