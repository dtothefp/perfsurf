class AddPasswordDigestToUsers < ActiveRecord::Migration
  def change

    reversible do |dir|
      dir.up do
        execute <<-SQL
          DELETE from users;
        SQL
      end
    end

    add_column :users, :password_digest, :string, null: false
  end
end
