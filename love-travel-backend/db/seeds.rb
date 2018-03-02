require "json"
require "http"
require_relative '../config/environment'


#####ADAPTED FROM YELP API's GITHUB

# API_KEY = 'TKCYy6Mimtx1vZ4vgeFAhsYvYXVUguAnAnMfczNyXmbvedsiE19A9docLmU0jmpPU5NVSe6aPOIMlfvI4aG06Baq5DPjIKB97pTOU4Jc-OpGcR-JP40QF9CV4x6YWnYx'
#
# API_HOST = "https://api.yelp.com"
# SEARCH_PATH = "/v3/businesses/search"
#
# LOCATION_COORDINATES = [
#   {"New York, NY": [40.712775, -74.005973]},
#   {"Los Angeles, CA": [34.052234, -118.243685]},
#   {"San Francisco, CA": [37.774929, -122.419416]},
#   {"London, UK": [51.507351, -0.127758]},
#   {"Paris, France": [48.856614, 2.352222]},
#   {"Buenos Aires, Argentina": [-34.603684, -58.381559]},
#   {"Tokyo, Japan": [35.689487, 139.691706]},
#   {"Hong Kong, HK": [22.396428, 114.109497]},
#   {"Rome, Italy": [41.902783, 12.496366]},
#   {"Sydney, Australia": [-33.868820, 151.209296]}]
#
# def create_locations
#   LOCATION_COORDINATES.each do |loc|
#     loc.each do |l, coords|
#       location_name = l
#       latitude = coords[0]
#       longitude = coords[1]
#
#       # puts l
#
#       Location.find_or_create_by(name: location_name, latitude_coordinate: latitude, longitude_coordinate: longitude)
#     end
#   end
# end
#
# create_locations
#
#
# def search
#   all_responses = {}
#
#   LOCATION_COORDINATES.each do |loc|
#     loc.each do |l, coords|
#
#       url = "#{API_HOST}#{SEARCH_PATH}"
#       params = {term: "tourist_attractions", location: "#{l}", limit: 10}
#
#       response = HTTP.auth("Bearer #{API_KEY}").get(url, params: params)
#
#       all_responses[l] = response.parse
#     end
#   end
#   all_responses
# end
#
# def create_attractions
#   yelp_hash = search
#   yelp_hash.each do |loc, att|
#     att_location = Location.find_by(name: loc.to_s)
#
#     att["businesses"].each do |a, details|
#
#       att_name = a["name"]
#       att_image_url = a["image_url"]
#       att_yelp_url = a["url"]
#       att_average_rating = a["rating"]
#       att_latitude = a["coordinates"]["latitude"]
#       att_longitude = a["coordinates"]["longitude"]
#       att_address1 = a["location"]["address1"]
#       att_address2 = a["location"]["address2"]
#       att_city = a["location"]["city"]
#       att_state = a["location"]["state"]
#       att_zip_code = a["location"]["zip_code"]
#       att_country = a["location"]["country"]
#       att_display_address = a["location"]["display_address"]
#
#       Attraction.find_or_create_by(location_id: att_location.id, name: att_name, image_url: att_image_url, yelp_url: att_yelp_url, average_rating: att_average_rating, latitude_coordinate: att_latitude, longitude_coordinate: att_longitude, address1: att_address1, address2: att_address2, city: att_city, state: att_state, zip_code: att_zip_code, country: att_country, display_address: att_display_address)
#     end
#   end
# end
#
#
# create_attractions
