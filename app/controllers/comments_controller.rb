class CommentsController < ApplicationController
  before_action :require_login

  def new
    if Hike.exists?(params[:hike_id])
      @user = current_user
      @hike = Hike.find_by(id: params[:hike_id])
      @comment = Comment.new
    else
      redirect_to hike_path
    end
  end

  def create
    comment = Comment.new(comment_params)
    if comment.save
      redirect_to hike_path(comment.hike)
    else
      render 'new'
    end
  end

  def edit
    @hike = Hike.find_by(id: params[:hike_id])
    if @hike.nil?
      redirect_to hikes_path
    else
      @comment = @hike.comments.find_by(id: params[:id])
      redirect_to hike_path(@hike) if @comment.exists? || flash[:alert] = "Sorry, that comment doesn't exist."
    end
  end

  def update
    @comment.update(comment_params)
    redirect_to hike_path(@comment.hike)
  end

  def destroy
    @comment.destroy 
    flash[:alert] = "Your comment has been deleted."
    redirect_to hike_path(@comment.hike)
  end

  private

  def comment_params
    params.require(:comment).permit(:user_id, :hike_id, :content)
  end
end