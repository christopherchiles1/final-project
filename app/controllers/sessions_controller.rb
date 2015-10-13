class SessionsController < ApplicationController
  before_action :ensure_not_logged_in, only: [:new, :create]

  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user.save
      login!(@user)
      redirect_to static_pages_root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def destroy
    logout!
    redirect_to new_session_url
  end
end
