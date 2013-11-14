class AddAttachmentImageToLocation < ActiveRecord::Migration
  def self.up
    change_table :location do |t|
      t.attachment :image
    end
  end

  def self.down
    drop_attached_file :location, :image
  end
end
