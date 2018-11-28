class HikesController < ApplicationController
  before_action :require_login, except: :index
  
  def index
    @hikes = Hike.all
    @books = @books.where(completed: params[:completed]) if params[:completed]
  end

  def new
    @user = User.find(params[:user_id])
    @hike = Hike.new
  end

  def create
    @user = User.find(params[:user_id])
    @hike = Hike.create(:user => @user)
    if @hike.save
      redirect_to user_hike_path(@hike.user) #I want this to go to hike show page
    else
      render 'new'
    end
  end

  def show
    @user = current_user
    @hike = Hike.find(params[:id])
    @comment = Comment.new(:hike => @hike)
  end

  def edit
    # @user = User.find(params[:user_id])
    @hike = Hike.find(params[:id])
  end

  def update
    @user = User.find(params[:user_id])
    @hike = Hike.find(params[:id])
    if @hike.update(hike_params)
      redirect_to hike_path(@hike)
    else
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
