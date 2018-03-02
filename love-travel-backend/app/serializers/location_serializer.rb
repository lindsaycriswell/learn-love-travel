class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :latitude_coordinate, :longitude_coordinate

  has_many :attractions
end
