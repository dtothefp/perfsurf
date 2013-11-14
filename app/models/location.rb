class Location < ActiveRecord::Base
  has_many :favorites
  has_many :users, through: :favorites
  has_attached_file :image, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "http://www.placekitten/300/200"

  validates_attachment :image, :presence => true
  validates_attachment_content_type :image, :content_type => ['image/jpeg'] 
end