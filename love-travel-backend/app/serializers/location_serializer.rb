class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :latitude_coordinate, :longitude_coordinate, :url_name

  has_many :attractions
  has_many :trips
  has_many :users, through: :trips
end


# needs to know if user exists, if user doesn't exist raise error
