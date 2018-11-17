class SessionsController < ApplicationController

  def new
  end

  # omniauth tutorial says I need to do name instead of username?
  def create 
    if auth_hash = request.env['omniauth.auth']
      @user = User.find_or_create_by_omniauth(auth_hash)
      login
    else
      @user = User.find_by(username: params[:username])
      if @user && @user.authenticate(params[:password])
      login
      else
        flash.now.alert = "Email or password is invalid.  Please try again."
        redirect_to '/login'
      end
    end
  end

  def destroy
    session.clear
    redirect_to root_url, notice: "You are now logged out."
  end

  private

  def login
    session[:user_id] = @user.id
    redirect_to user_path(@user)
  end

  def auth
    request.env['omniauth.auth']
  end
end
