class Hike < ApplicationRecord
  belongs_to :user
  has_many :comments, :dependent => :destroy
  has_many :comments, through: :users
  
  validates :name, presence: true
  validates :state, presence: true

  scope :with_comments, -> { where("comments_count > 0") }

  # def self.completed
  #   where(completed: true)
  # end
end