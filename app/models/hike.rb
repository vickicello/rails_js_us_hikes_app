class Hike < ApplicationRecord
  belongs_to :user
  belongs_to :state
  has_many :comments
  has_many :users, through: :comments

  validates :name, presence: true
  validates :state_id, presence: true

  scope :with_comments, -> { where("comments_count > 0") }

end

