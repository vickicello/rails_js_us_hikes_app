class Hike < ApplicationRecord
  belongs_to :user
  belongs_to :state
  has_many :comments
  has_many :users, through: :comments

  validates :name, presence: true

  # how to make sure trail is created with state always?
end
