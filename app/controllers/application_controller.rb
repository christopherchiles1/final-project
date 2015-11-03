class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def ensure_logged_in
    redirect_to new_session_url unless current_user
  end

  def ensure_not_logged_in
    redirect_to users_url(current_user) if current_user
  end

  def seed!(user)
    user.projects.create!([
      {title: 'Finances', description: 'pay bills and keep track of money', visible: true},
      {title: 'Relaxation', description: 'fun things to do!', visible: true},
      {title: 'Organize dinner party', description: 'On saturday the 10th!', visible: true},
      {title: 'Education', description: 'Make sure to keep learning new skills', visible: false}
    ])

    # user.projects.where({title: 'Finances'}).first.tasks.create!([
    #
    # ])
    #
    # user.projects.where({title: 'Relaxation'}).first.tasks.create!([
    #
    # ])
    #
    # user.projects.where({title: 'Organize dinner party'}).first.tasks.create!([
    #
    # ])
    #
    # user.projects.where({title: 'Education'}).first.tasks.create!([
    #
    # ])

  end
end
