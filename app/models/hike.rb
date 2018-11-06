class Hike < ApplicationRecord
  belongs_to :user
  belongs_to :state
  has_many :comments
  has_many :users, through: :comments
end
