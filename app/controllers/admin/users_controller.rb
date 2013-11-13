## ADMIN USERS CONTROLLER ##
class Admin::UsersController < ApplicationController

  before_action :admin?

  def index
    @users = User.all
  end

  def destroy
    @user = User.find(params[:id])
  if @user.destroy
      redirect_to admin_users_path
  end
 end
end
