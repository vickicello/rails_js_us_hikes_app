class HikesController < ApplicationController
  def index
    @hikes = Hike.all
  end

  def show
    @hike = Hike.find(params[:id])
  end

  def new
    @hike = Hike.new
  end

  def create
    @hike = Hike.create(hike_params)
    redirect_to hike_path(@hike)
    # should we have validations here? if @hike.save, etc
  end

  def edit
    @hike = Hike.find(params[:id])
  end

  def update
    @hike = Hike.find(params[:id])
    @hike.update(hike_params)
    redirect_to hike_path(@hike)
  end

  private

  def hike_params
    params.require(:hike).permit(:name, :state_id, :description, :user_id)
  end
end
