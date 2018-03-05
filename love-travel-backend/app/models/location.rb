class Location < ApplicationRecord
  has_many :attractions
  has_many :trips
  has_many :users, through: :trips
  has_many :comments
  has_many :users, through: :comments

end
