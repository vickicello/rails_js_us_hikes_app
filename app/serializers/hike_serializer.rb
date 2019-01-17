class HikeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :state, :completed, :user_id
  
  belongs_to :user
  has_many :comments
  has_many :commentors
end
