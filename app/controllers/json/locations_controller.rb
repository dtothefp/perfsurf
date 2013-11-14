class Json::LocationsController < ApplicationController

  before_action :admin?

  def index
    @locations = Location.all
    
    render json: @locations
  end

  def show
    @location = Location.find(params[:id])

    render json: @location
  end

end