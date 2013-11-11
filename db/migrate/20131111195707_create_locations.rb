class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :name, null: false
      t.decimal :latitude, null: false
      t.decimal :longitude, null: false
      t.integer :msw_id, null: false
    end

    add_index :locations, :name, unique: true
    add_index :locations, :msw_id, unique: true
  end
end
