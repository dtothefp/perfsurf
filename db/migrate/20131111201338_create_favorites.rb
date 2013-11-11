class CreateFavorites < ActiveRecord::Migration
  def change
     create_table :favorites do |t|
      t.belongs_to :user, null: true
      t.belongs_to :location, null: true
    end

  reversible do |dir|
      dir.up do
        execute <<-SQL
          ALTER TABLE favorites
          ADD CONSTRAINT fk_users
          FOREIGN KEY (user_id)
          REFERENCES users(id),
          ADD CONSTRAINT fk_locations
          FOREIGN KEY (location_id)
          REFERENCES locations(id)
        SQL
      end
    end
  end

end
