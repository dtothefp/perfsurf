class StaticController < ApplicationController

  def index
    
  end

  def show
    @responses = Response.new( HTTParty.get("http://magicseaweed.com/api/pGQx9a7IXwVYs3lIcQ8RV5E0y74Xmg9Y/forecast/?spot_id=1") )
    @stats = @responses.timestamp_to_object
    binding.pry
  end

end
