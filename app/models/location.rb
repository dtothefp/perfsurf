class Location < ActiveRecord::Base
  has_many :favorites
  has_many :users, through: :favorites
  has_attached_file :image, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "http://upload.wikimedia.org/wikipedia/commons/4/4f/Surf_Girl01.jpg" 
end