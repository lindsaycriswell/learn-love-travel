class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :latitude_coordinate, :longitude_coordinate, :url_name

  has_many :attractions
  has_many :user_trips
  has_many :users, through: :user_trips
end


# needs to know if user exists, if user doesn't exist raise error
