class Channel < ActiveRecord::Base
  has_many :messages
  has_many :users, through: :messages

  validates :name, presence: true, uniqueness: true, case_sensitive: false
end

