class Location < ApplicationRecord
  has_many :attractions
  has_many :trips
  has_many :users, through: :trips

end
