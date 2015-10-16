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
    if @user && @user.save
      login!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Failed to login"]
      @user = User.new
      render :new
    end
  end

  def destroy
    logout!
    render json: {}
  end
end
