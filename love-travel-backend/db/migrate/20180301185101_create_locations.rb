class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.float :latitude_coordinate
      t.float :longitude_coordinate
      t.string :url_name

      t.timestamps
    end
  end
end
