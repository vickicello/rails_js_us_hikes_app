class SessionsController < ApplicationController

  def new
    @user = User.new
  end

  # omniauth tutorial says I need to do name instead of username?
  def create 
    @user = User.find_or_create_by(uid: auth['uid']) do |u|
      u.username = auth['info']['username']
      u.email = auth['info']['email']
      u.image = auth['info']['image']
    end

    session[:user_id] = @user.id
    render '/'
  end

  def destroy
    session.destroy
    redirect_to root_path
  end

  private

  def auth
    request.env['omniauth.auth']
  end
end
