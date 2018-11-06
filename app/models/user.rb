class User < ApplicationRecord
  has_secure_password
  has_many :hikes
  has_many :comments
  has_many :commented_hikes, through: :hikes
end
