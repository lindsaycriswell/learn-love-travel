class CreateUserTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :user_trips do |t|
      t.references :user
      t.references :location
      t.datetime :start_date
      t.datetime :end_date
      t.string :notes
      t.boolean :active, default: true
      t.timestamps
    end
  end
end
