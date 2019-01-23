class Hike < ApplicationRecord
  belongs_to :user
  has_many :comments, :dependent => :destroy
  has_many :commentors, :class_name => "User", through: :comments
  
  validates :name, presence: true
  validates :state, presence: true
  validates :description, presence: true

  scope :by_recently_added, -> { order(created_at: :desc) }

  # def self.search(search)
  #   if search
  #     state = Hike.state.find_by(params[:state])
  #     if state 
  #       self.where(state: state)
  #     else
  #       Hike.all
  #     end
  #   else
  #     Hike.all
  #   end
  # end
end