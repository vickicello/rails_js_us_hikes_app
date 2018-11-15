class HikesController < ApplicationController
  before_action :require_login
  skip_before_action :require_login, only: [:index]
  
  def index
    if params[:user_id] && current_user.id == params[:user_id].to_i
      @user = current_user
      @hikes = @user.hikes
    elsif params[:user_id]
      flash[:alert] = "You are not authorized to view this page."
      redirect_to hikes_path
    else
      @hikes = Hike.all
    end
  end

  def new
    if current_user.id == params[:user_id].to_i
      @user = current_user
      @hike = Hike.new(user_id: params[:user_id])
    else 
      flash[:alert] = "You are not authorized to create a hike on this user's page."
      redirect_to hikes_path
    end
  end

  def create
    @hike = Hike.new(hike_params)
    @user = User.find_by(id: params[:user_id])
    if @hike.save
      redirect_to hike_path(@hike)
    else
      render 'new'
    end
  end

  def show
    @hike = Hike.find_by(id: params[:id])
  end

  def edit
    if current_user.id == params[:user_id].to_i
      @user = current_user
      @hike = @user.hikes.find_by(id: params[:id])
      if @hike.nil?
        flash[:alert] = "Hike not found."
        redirect_to user_hikes_path(@user)
      else
        @hike.build(hike_params)
      end
    end
    else
      flash[:alert] = "You are not authorized to edit another user's hike."
      redirect_to hikes_path
    end
  end

  def update
    @hike = Hike.find_by(id: params[:id])
    @user = User.find_by(id: params[:user_id])
    @hike.update(hike_params)
    redirect_to hike_path(@hike)
  end

  def destroy
    @hike = Hike.find_by(id: params[:id])
    @hike.destroy
    redirect_to hikes_path
  end

  private

  def require_login
    return head(:forbidden) unless session.include? :user_id
  end

  def hike_params
    params.require(:hike).permit(:name, :state, :description, :user_id, :completed)
  end
end
