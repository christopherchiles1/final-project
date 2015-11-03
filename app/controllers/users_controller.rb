class UsersController < ApplicationController
  before_action :ensure_logged_in, only: [:show]
  before_action :ensure_not_logged_in, only: [:new, :create]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.username =~ /^demo[0-9]{3}$/
      demo = true
    end

    if @user.save
      seed!(@user) if demo == true
      login!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
