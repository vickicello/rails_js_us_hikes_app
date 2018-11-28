class Hike < ApplicationRecord
  belongs_to :user
  has_many :comments, :dependent => :destroy
  has_many :users, through: :comments
  
  validates :name, presence: true
  validates :state, presence: true

  scope :completed, -> { where(completed: true) }

  def self.completed
    where(completed: true)
  end
  # scope :with_comments, -> { where("comments_count > 0") }
end

