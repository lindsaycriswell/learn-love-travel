class User < ApplicationRecord
  has_many :user_trips
  has_many :locations, through: :user_trips

  # has_secure_password

  validates :username, uniqueness: true
end
