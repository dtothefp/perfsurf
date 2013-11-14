## ADMIN LOCATIONS CONTROLLER ##
class Admin::LocationsController < ApplicationController

  before_action :admin?

  def index
    @locations = Location.all
  end

  def new
    @location = Location.new
  end

  def create
    @location = Location.new(admin_location_params)
    if @location.save
      redirect_to admin_locations_path
    else
      render :new
    end
  end

  def edit
    @location = Location.find(params[:id])
    render :edit
  end

  def update
    @location = Location.find(params[:id])
    if @location.update_attributes(admin_location_params)
      redirect_to admin_locations_path
    else
      render :edit
    end
  end

  def destroy
    @location = Location.find(params[:id])
    if @location.destroy
      redirect_to new_admin_location_path
    else
      render :edit
    end
  end

  private

  def admin_location_params
    params.require(:location).permit(:name, :latitude, :longitude, :msw_id, :image)
  end
end