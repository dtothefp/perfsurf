class StaticController < ApplicationController

  def index
    
  end

  def show
    @responses = Response.new( HTTParty.get("http://magicseaweed.com/api/pGQx9a7IXwVYs3lIcQ8RV5E0y74Xmg9Y/forecast/?spot_id=1") )
    @stats = @responses.timestamp_to_object
   # @location = Location.find(params[:id])
    # @responses = Response.new(HTTParty.get("http://magicseaweed.com/api/pGQx9a7IXwVYs3lIcQ8RV5E0y74Xmg9Y/forecast/?spot_id=" + (@location.msw_id).to_s))
   
    
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

    # private 

    # def timestamp_to_array(response)
    #   stamp = Time.at(response["timestamp"])
    #   time = {};
    #   time[:full_time] = stamp.strftime("%A, %b %e %l%p")
    #   time[:date] = stamp.strftime("%A, %b %e")
    #   time[:hour] = stamp.strftime("%l%p")
    #   return time
    # end

   
  end

end
