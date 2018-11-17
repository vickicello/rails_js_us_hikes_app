class HikesController < ApplicationController
  before_action :require_login, only: [:new, :edit, :create, :update, :destroy]
  
  def index
    @hikes = Hike.all
    @hikes = @hikes.where(user_id: params[:user_id]) if params[:user_id]
  end

  def new
    @hike = current_user.hike.build
  end

  def create
    @hike = Hike.new(hike_params)
    if @hike.save
      @hike.creator = current_user
      redirect_to hike_path(@hike)
    else
      render 'new'
    end
  end

  def show
    @hike = Hike.find(params[:id])
  end

  def edit
    # if current_user.id == params[:user_id].to_i
    #   @user = current_user
    #   @hike = @user.hikes.find_by(id: params[:id])
    #   if @hike.nil?
    #     flash[:alert] = "Hike not found."
    #     redirect_to user_hikes_path(@user)
    #   else
    #     @hike.build(hike_params)
    #   end
    # else
    #   flash[:alert] = "You are not authorized to edit another user's hike."
    #   redirect_to hikes_path
    # end
  end

  def update
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
