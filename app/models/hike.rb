class Hike < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :users, through: :comments
  # accepts_nested_attributes_for :comments
  
  validates :name, presence: true
  validates :state, presence: true

  scope :with_comments, -> { where("comments_count > 0") }

  # def self.completed
  #   where(completed: true)
  # end
end