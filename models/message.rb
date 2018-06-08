class Message < ActiveRecord::Base
  belongs_to :channel
  belongs_to :user

  validates :content, presence: true
  validates :user_id, presence: true
  validates :channel_id, presence: true
end

