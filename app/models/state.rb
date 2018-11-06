class State < ApplicationRecord
  has_many :hikes
  has_many :users, through: :hikes

  # validates :state_name, presence: true
  # validates :state_code, presence: true, length: { is: 2 }
end
