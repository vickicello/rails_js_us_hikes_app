class HikesController < ApplicationController
  before_action :require_login, except: [:index, :show]
  
  def index
    @hikes = Hike.all
    @hikes = @hikes.where(completed: params[:completed]) if params[:completed]
  end

  def new
    # @user = User.find(params[:user_id])
    @hike = Hike.new
  end

  def create
    # @user = User.find(params[:user_id])
    @user = current_user
    @hike = current_user.hikes.build(hike_params)
    if @hike.save
      redirect_to user_hikes_path(current_user.hikes)
      # redirect_to user_hikes_path(@user.hikes) #I want this to go to hike show page
    else
      render 'new'
    end
  end

  def show
    @user = current_user
    @hike ||= Hike.find(params[:id])
    @comment = Comment.new(:hike => @hike)
  end

  def edit
    @hike = Hike.find(params[:id])
    if current_user.id == @hike.user_id
    else
      flash[:message] = "The hike can only be edited by the user that created it."
      redirect_to hike_path(@hike)
    end
  end

  def update
    @hike = Hike.find(params[:id])
    if current_user.id == @hike.user_id
      @hike.update(hike_params)
      redirect_to hike_path(@hike)
    else
      flash[:message] = "Changes failed to save, please try again."
      render "edit"
    end
  end

  def destroy
    @hike = Hike.find(params[:id])
    @hike.destroy
    redirect_to user_hikes_path(@user)
  end

  private

  def hike_params
    params.require(:hike).permit(:name, :state, :description, :user_id, :completed)
  end
  
end
