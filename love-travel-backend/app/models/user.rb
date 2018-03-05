class User < ApplicationRecord
  has_many :trips
  has_many :locations, through: :trips
  has_many :comments
  has_many :locations, through: :comments

  # has_secure_password

  validates :username, uniqueness: true
end
