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
    if !logged_in?
      redirect_to new_user_path
    elsif !current_user.admin
      redirect_to user_path(current_user)
    end
  end

end
