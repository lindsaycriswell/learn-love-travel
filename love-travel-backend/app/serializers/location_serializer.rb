class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :latitude_coordinate, :longitude_coordinate, :url_name

  has_many :attractions
  has_many :trips
  has_many :users, through: :trips
  has_many :comments
  has_many :users, through: :comments
end


# needs to know if user exists, if user doesn't exist raise error
