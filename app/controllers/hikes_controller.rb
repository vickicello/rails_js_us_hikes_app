class HikesController < ApplicationController
  before_action :require_login, :current_user
  skip_before_action :require_login, only: [:index]
  
  def index
    @hikes = Hike.all
    # do I need a way to only show hikes of current_user?
  end

  def show
    @hike = Hike.find_by(id: params[:id])
  end

  def new
    @hike = Hike.new
  end

  def create
    @hike = Hike.new(hike_params)
    if @hike.save
    # @hike.creator = current_user
    redirect_to hike_path(@hike)
    else
      render 'new'
    end
  end

  def edit
    @hike = Hike.find(params[:id])
  end

  def update
    @hike = Hike.find(params[:id])
    @hike.update(hike_params)
    redirect_to hike_path(@hike)
  end

  def destroy
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
