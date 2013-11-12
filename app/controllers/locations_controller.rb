class LocationsController < ApplicationController

  def new
    
  end

  def index 
    @locations = Location.all
    render :index
  end

  def show
    @location = Location.find(params[:id])
    render :show
  end
end