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

  def self.find_or_create_by_omniauth(auth_hash)
    oauth_email = auth_hash["info"]["email"]
    self.where(email: oauth_email).first_or_create do |user|
      user.password = SecureRandom.hex
    end
  end
end
