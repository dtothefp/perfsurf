## ADMIN USERS CONTROLLER ##
class Admin::UsersController < ApplicationController

  before_action :admin?

  def index
    @users = User.all
  end

end
