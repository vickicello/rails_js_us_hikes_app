class HikesController < ApplicationController
  before_action :require_login, only: [:new, :edit, :create, :update, :destroy]
  
  def index
    @hikes = current_user.hikes.all
  end

  def new
    @hike = current_user.hikes.new
  end

  def create
    @hike = current_user.hikes.new(hike_params)
    if @hike.save
      redirect_to hike_path(@hike)
      # redirect_to @hike ???
    else
      render 'new'
    end
  end

  def show
    @hikes = current_user.find_by(user_id: params[:user_id]).hikes.all
  end

  def edit
    @hike = Hike.find(params[:id])
  end

  def update
    @hike = Hike.find(params[:id])
    if @hike.update(hike_params)
      redirect_to hike_path(@hike)
      # redirect_to @hike ?
    else
      render "edit"
    end
  end

  def destroy
    @hike = Hike.find(params[:id])
    @hike.destroy
    redirect_to hike_path
  end

  private

  def hike_params
    params.require(:hike).permit(:name, :state, :description, :user_id, :completed)
  end
  
end
