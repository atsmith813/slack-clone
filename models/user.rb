class User < ActiveRecord::Base
  has_many :messages
  has_many :channels, through: :messages

  validates :screen_name, presence: true, uniqueness: true
end

