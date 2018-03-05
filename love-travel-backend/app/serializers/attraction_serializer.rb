class AttractionSerializer < ActiveModel::Serializer
  attributes :id, :location, :location_id, :name, :image_url, :yelp_url, :average_rating, :latitude_coordinate, :longitude_coordinate, :address1, :address2, :city, :state, :zip_code, :country, :display_address, :url_name, :yelp_id

  belongs_to :location
end
