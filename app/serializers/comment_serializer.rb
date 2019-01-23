class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :hike_id, :content

  belongs_to :commentor
  belongs_to :hike
end
