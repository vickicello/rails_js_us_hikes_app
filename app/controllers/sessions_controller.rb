class SessionsController < ApplicationController

  def new
  end

  # omniauth tutorial says I need to do name instead of username?
  def create 
    if auth_hash = request.env['omniauth.auth']
      user = User.find_or_create_by_omniauth(auth_hash)
      session[:user_id] = user.id
      redirect_to user_path(user)
    else
      @user = User.find_by(email: params[:session][:email].downcase)
      if @user && @user.authenticate(params[:session][:email].downcase)
        session[:user_id] = @user.id
        redirect_to user_path(@user)
      else
        flash[:danger] = 'Something went wrong. Please try again.'
        render 'sessions/new'
      end
    end
  end

  def destroy
    session.destroy :user_id
    redirect_to root_path
  end

  private

  def auth
    request.env['omniauth.auth']
  end
end
