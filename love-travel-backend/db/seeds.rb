require "json"
require "http"
require_relative '../config/environment'


####ADAPTED FROM YELP API's GITHUB

API_KEY = 'TKCYy6Mimtx1vZ4vgeFAhsYvYXVUguAnAnMfczNyXmbvedsiE19A9docLmU0jmpPU5NVSe6aPOIMlfvI4aG06Baq5DPjIKB97pTOU4Jc-OpGcR-JP40QF9CV4x6YWnYx'

API_HOST = "https://api.yelp.com/v3/businesses/search"

LOCATION_COORDINATES = [
  {"New York, NY": [40.712775, -74.005973]},
  {"Los Angeles, CA": [34.052234, -118.243685]},
  {"San Francisco, CA": [37.774929, -122.419416]},
  {"London, UK": [51.507351, -0.127758]},
  {"Paris, France": [48.856614, 2.352222]},
  {"Buenos Aires, Argentina": [-34.603684, -58.381559]},
  {"Tokyo, Japan": [35.689487, 139.691706]},
  {"Hong Kong, HK": [22.396428, 114.109497]},
  {"Rome, Italy": [41.902783, 12.496366]},
  {"Sydney, Australia": [-33.868820, 151.209296]},
  {"Brussels, Belgium": [50.850346, 4.351721]},
  {"Rio de Janeiro, Brazil": [-22.906847, -43.172896]},
  {"Sao Paulo, Brazil": [-23.550520, -46.633309]},
  {"Montreal, Canada": [45.501689, -73.567256]},
  {"Toronto, Canada": [43.653226, -79.383184]},
  {"Vancouver, Canada": [49.282729, -123.120738]},
  {"Santiago, Chile": [-33.448890, -70.669265]},
  {"Prague, Czech Republic": [50.075538, 14.4378]},
  {"Helsinki, Finland": [60.169856, 24.938379]},
  {"Berlin, Germany": [52.520007, 13.404954]},
  {"Munich, Germany": [48.135125, 11.58198]},
  {"Milan, Italy": [45.464204, 9.189982]},
  {"Kuala Lumpur, Malaysia": [3.139003, 101.686855]},
  {"Mexico City, Mexico": [19.432608, -99.13320]},
  {"Auckland, New Zealand": [-36.848460, 174.763332]},
  {"Oslo, Norway": [59.913869, 10.752245]},
  {"Manila, Philippines": [14.599512, 120.984219]},
  {"Warsaw, Poland": [52.229676, 21.012229]},
  {"Lisbon, Portugal": [38.722252, -9.139337]},
  {"Dublin, Ireland": [53.349805, -6.26031]},
  {"Singapore, Singapore": [1.352083, 103.819836]},
  {"Barcelona, Spain": [41.385064, 2.173403]},
  {"Madrid, Spain": [40.416775, -3.70379]},
  {"Madrid, Spain": [40.416775, -3.70379]},
  {"Zurich, Switzerland": [47.376887, 8.541694]},
  {"Taipei, Taiwan": [25.032969, 121.565418]},
  {"Amsterdam, The Netherlands": [52.370216, 4.895168]},
  {"Istanbul, Turkey": [41.008238, 28.978359]},
  {"Belfast, Northern Ireland": [54.597285, -5.93012]},
  {"Edinburgh, Scotland": [55.953252, -3.188267]},
  {"Glasgow, Scotland": [55.864237, -4.251806]},
  {"San Diego, CA": [32.715738, -117.161084]},
  {"Denver, CO": [39.739236, -104.990251]},
  {"Washington, DC": [38.907192, -77.036871]},
  {"Miami, FL": [25.761680, -80.19179]},
  {"Atlanta, GA": [33.748995, -84.387982]},
  {"Lahaina, HI": [20.878333, -156.6825]},
  {"Chicago, IL": [41.878114, -87.629798]},
  {"New Orleans, LA": [29.951066, -90.071532]},
  {"Boston, MA": [42.360082, -71.05888]},
  {"Baltimore, MD": [39.290385, -76.612189]},
  {"Detroit, MI": [42.331427, -83.045754]},
  {"Las Vegas, NV": [36.169941, -115.13983]},
  {"Portland, OR": [45.523062, -122.676482]},
  {"Philadelphia, PA": [39.952584, -75.165222]},
  {"Nashville, TN": [36.162664, -86.781602]},
  {"Seattle, WA": [47.606209, -122.332071]},
]


# def create_locations
#   LOCATION_COORDINATES.each do |loc|
#     loc.each do |l, coords|
#       location_name = l
#       latitude = coords[0]
#       longitude = coords[1]
#       url_name = l.to_s.split(",")[0].split(" ").join("-")
#
#     Location.create(name: location_name, latitude_coordinate: latitude, longitude_coordinate: longitude, url_name: url_name)
#     end
#   end
# end
#
# create_locations
#
#
# def attraction_search
#   all_responses = {}
#
#   LOCATION_COORDINATES.each do |loc|
#     loc.each do |l, coords|
#
#       url = "#{API_HOST}"
#       params = {term: "tourist_attractions", location: "#{l}", limit: 10}
#
#       response = HTTP.auth("Bearer #{API_KEY}").get(url, params: params)
#
#       all_responses[l] = response.parse
#     end
#   end
#   puts all_responses
# end
#
# attraction_search
#
# def create_attractions
#   yelp_hash = attraction_search
#   yelp_hash.each do |loc, att|
#     att_location = Location.find_by(name: loc.to_s)
#
#     att["businesses"].each do |a, details|
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
#       url_name = att_name.split(" ").join("-")
#       yelp_id = a["id"]
#
#
#       Attraction.create(location_id: att_location.id, name: att_name, image_url: att_image_url, yelp_url: att_yelp_url, average_rating: att_average_rating, latitude_coordinate: att_latitude, longitude_coordinate: att_longitude, address1: att_address1, address2: att_address2, city: att_city, state: att_state, zip_code: att_zip_code, country: att_country, display_address: att_display_address, url_name: url_name, yelp_id: yelp_id)
#     end
#   end
# end
#
# create_attractions
#
# User.create(username: "ShadyReviewer", password_digest: "chipotle7", motto: "Not today, Satan!", bio: "Shady Reviewer")
#
# Comment.create(content: "Pizza rat. 'Nuff said.'", user_id: 1, location_id: 1)
# Comment.create(content: "I spent my whole vacation stuck in traffic", user_id: 1, location_id: 2)
# Comment.create(content: "Too many tech bros", user_id: 1, location_id: 3)
# Comment.create(content: "Beers cost $15. Fuck Boris Johnson", user_id: 1, location_id: 4)
# Comment.create(content: "Speak English!", user_id: 1, location_id: 5)
# Comment.create(content: "I have osteoperosis from eating so much steak", user_id: 1, location_id: 6)
# Comment.create(content: "All these lights gave me a seizure", user_id: 1, location_id: 7)
# Comment.create(content: "There are literally like a billion people in this country.", user_id: 1, location_id: 8)
# Comment.create(content: "What's with all the old shit? Even I got catcalled here.", user_id: 1, location_id: 9)
# Comment.create(content: "G'Day, ya weird snake lovers.", user_id: 1, location_id: 10)

def createReviews

  Attraction.all.each do |att|
    url = `https://api.yelp.com/v3/businesses/#{att.yelp_id}/reviews`
    params = {locale: "en_US"}
    response = HTTP.auth("Bearer #{API_KEY}").get(url, params: params)
    all_responses = response.parse

    puts all_responses

  end
end

createReviews
