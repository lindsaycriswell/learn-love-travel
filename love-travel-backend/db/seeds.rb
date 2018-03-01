require "json"
require "http"
require_relative '../config/environment'


#####ADAPTED FROM YELP API's GITHUB

API_KEY = 'TKCYy6Mimtx1vZ4vgeFAhsYvYXVUguAnAnMfczNyXmbvedsiE19A9docLmU0jmpPU5NVSe6aPOIMlfvI4aG06Baq5DPjIKB97pTOU4Jc-OpGcR-JP40QF9CV4x6YWnYx'

API_HOST = "https://api.yelp.com"
SEARCH_PATH = "/v3/businesses/search"

LOCATION_COORDINATES = [
  {"New York, NY": [40.712775, -74.005973]},
  {"Los Angeles, CA": [34.052234, -118.243685]},
  {"San Francisco, CA": [37.774929, -122.419416]},
  {"London, UK": [51.507351, -0.127758]},
  {"Paris, France": [48.856614, 2.352222]},
  {"Buenos Aires, Argentina": [-34.603684, 58.381559]},
  {"Tokyo, Japan": [35.689487, 139.691706]},
  {"Hong Kong, HK": [22.396428, 114.109497]},
  {"Rome, Italy": [41.902783, 12.496366]},
  {"Sydney, Australia": [-33.868820, 151.209296]}]

def create_locations
  LOCATION_COORDINATES.each do |loc|
    loc.each do |l, coords|
      location_name = l
      latitude = coords[0]
      longitude = coords[1]
      # CREATE LOCATIONS HERE
    end
  end
end

create_locations


def search
  all_responses = []

  LOCATION_COORDINATES.each do |loc|
    loc.each do |l, coords|

      url = "#{API_HOST}#{SEARCH_PATH}"
      params = {term: "tourist_attractions", location: "#{l}", limit: 10}

      response = HTTP.auth("Bearer #{API_KEY}").get(url, params: params)

      all_responses << response.parse
    end
  end
end

search
