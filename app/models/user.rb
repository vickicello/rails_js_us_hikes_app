class User < ApplicationRecord
  has_secure_password
  has_many :hikes
  has_many :comments
  has_many :commented_hikes, through: :hikes

  validates :username, presence: true
  validates :username, length: { minimum: 6 }
  validates :username, uniqueness: true
  validates :email, presence: true
  validates :email, uniqueness: true
end
