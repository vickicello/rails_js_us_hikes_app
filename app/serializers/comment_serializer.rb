class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :hike_id, :content

  belongs_to :commentor, :class_name => "User", :foreign_key => "user_id"
  belongs_to :hike
end
