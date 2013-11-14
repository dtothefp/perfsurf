module SessionsHelper

  def logged_in?
    session[:user_id].present?
  end

  def authenticated!
    unless logged_in?
      redirect_to new_session_path
    end
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def admin?
    if logged_in?
      current_user.admin # if logged in, return true IF ADMIN
    else
      false # if not logged in always return false
    end
  end

  def admin_authorized!
    unless admin?
      redirect_to user_path(current_user)
    end
  end

end
