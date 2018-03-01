class CreateAttractions < ActiveRecord::Migration[5.1]
  def change
    create_table :attractions do |t|
      t.integer :location_id
      t.string :name
      t.string :image_url
      t.string :yelp_url
      t.float :average_rating
      t.string :latitude_coordinate
      t.string :longitude_coordinate
      t.string :address1
      t.string :address2
      t.string :city
      t.string :state
      t.string :zip_code
      t.string :country
      t.string :display_address
      t.string :display_phone

      t.timestamps
    end
  end
end
