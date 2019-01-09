class CommentsController < ApplicationController
  before_action :require_login

  def index
    @user = current_user
    @hike ||= Hike.find(params[:hike_id])
    @comment = @hike.comments
    respond_to do |f| 
      f.html { render :index }
      f.json { render json: @hike.comments }
    end
  end

  def create
    @user = current_user
    @hike = Hike.find(params[:hike_id])
    @comment = @hike.comments.create(comment_params)
    if @comment.save
      render 'comments/show', layout: false
      # redirect_to hike_path(@hike), success: "Comment was successfully created."
    else
      render 'hikes/show', layout: false
      # redirect_to hike_path(@hike), danger: "Error creating comment. Please try again."
    end
  end

  def destroy
    @hike = Hike.find(params[:hike_id])
    @comment = Comment.find(params[:id])
    if current_user.id == @comment.user_id
      @comment.destroy
      redirect_to hike_path(@hike), info: "Your comment has been deleted."
    else
      redirect_to hike_path(@hike), warning: "You can't delete comments that you didn't write."
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:user_id, :hike_id, :content)
  end
end