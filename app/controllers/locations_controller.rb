class LocationsController < ApplicationController

  def new
    
  end

  def index 
    @locations = Location.all
    render :index
  end

  def show
    @location = Location.find(params[:id])
    @responses = Response.new(HTTParty.get("http://magicseaweed.com/api/pGQx9a7IXwVYs3lIcQ8RV5E0y74Xmg9Y/forecast/?spot_id=" + (@location.msw_id).to_s))
   
    binding.pry
    # @times = @responses.map do |response|
    #   timestamp_to_array(response)
    # end
    # @day_list = @times.map{|el| el[:date] }.uniq
    # @hour_list = @times.map{|el| el[:hour] }.uniq

    # @hour_list = @hour_list.sort_by do |el|
    #   el = el.strip
    #   el = (el.length == 3 ? "0" + el : el)
    #   el.gsub(/(\d+)(AM|PM)/, '\2\1' )
    # end

    # #binding.pry

    # render :show
  end

end