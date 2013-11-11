class User < ActiveRecord::Base
  validates :email, uniqueness: true, presence: true

  has_many :favorites
  has_many :locations, through: :favorites
  has_secure_password
end