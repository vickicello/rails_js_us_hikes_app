class CommentsController < ApplicationController
  before_action :require_login

  # def new
  #   if Hike.exists?(params[:hike_id])
  #     @user = current_user
  #     @hike = Hike.find_by(id: params[:hike_id])
  #     @comment = Comment.new
  #   else
  #     redirect_to hike_path
  #   end
  # end

  def create
    @user = current_user
    @hike = Hike.find(params[:hike_id])
    @comment = @hike.comments.create(comment_params)
    if @comment.save
      redirect_to hike_path(@hike), notice: "Comment was successfully created."
    else
      redirect_to hike_path(@hike), notice: "Error creating comment. Please try again."

    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    redirect_to(@comment.hike), info: "Your comment has been deleted."
    # redirect_to hike_path(@comment.hike)
  end

  private

  def comment_params
    params.require(:comment).permit(:user_id, :hike_id, :content)
  end
end