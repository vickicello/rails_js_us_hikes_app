class Hike < ApplicationRecord
  belongs_to :user
  has_many :comments, :dependent => :destroy
  has_many :commentors, :class_name => "User", through: :comments
  
  validates :name, presence: true
  validates :state, presence: true

  scope :completed, -> { where(completed: true) }

  def self.completed
    where(completed: true)
  end
end

