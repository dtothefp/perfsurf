class LocationsController < ApplicationController

  def new
    
  end

  def index 
    @locations = Location.all

    @top_level_arr = []

    @locations.each do |location|
      responses = HTTParty.get("http://magicseaweed.com/api/pGQx9a7IXwVYs3lIcQ8RV5E0y74Xmg9Y/forecast/?spot_id=" + location.msw_id.to_s )

      responses.map { |r| Response.new(r) }.each do |response|
        @top_level_arr << {"geometry" => response.coordinates_hash(location) }
      end
    end

    if logged_in?
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