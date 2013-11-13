class Favorite < ActiveRecord::Base
  validates_uniqueness_of :user_id, :scope => :location_id

  belongs_to :user
  belongs_to :location
end