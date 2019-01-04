class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  has_many :hikes
  has_many :comments
  has_many :commented_hikes, :through => :comments, :source => :hike
end
