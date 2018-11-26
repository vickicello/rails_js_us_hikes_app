class HikesController < ApplicationController
  before_action :require_login, except: :index
  
  def index
    @hikes = Hike.all
  end

  def new
    @user = User.find(params[:user_id])
    @hike = Hike.new
  end

  def create
    @user = User.find(params[:user_id])
    @hike = Hike.new(hike_params)
    if @hike.save
      redirect_to user_hike_path(@hike) #I want this to go to hike show page
    else
      render 'new'
    end
  end

  def show
    @user = current_user
    @hike = Hike.find(params[:id])
    @comment = Comment.new
  end

  def edit
    @user = User.find(params[:user_id])
    @hike = Hike.find_by(id: params[:id])
  end

  def update
    @user = User.find(params[:user_id])
    @hike = Hike.find_by(id: params[:id])
    if @hike.update(hike_params)
      redirect_to hike_path(@hike)
      # redirect_to @hike ?
    else
      render "edit"
    end
  end

  def destroy
    @hike = Hike.find_by(id: params[:user_id])
    @hike.destroy
    redirect_to hikes_path
  end

  private

  def hike_params
    params.require(:hike).permit(:name, :state, :description, :user_id, :completed)
  end
  
end
