class CreateUserTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :user_trips do |t|
      t.references :user
      t.references :location
      t.boolean :status
      t.timestamps
    end
  end
end
