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
  end

end