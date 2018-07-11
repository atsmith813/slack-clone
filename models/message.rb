class Message < ActiveRecord::Base
  belongs_to :channel
  belongs_to :user

  validates :content, presence: true
  validates :user_id, presence: true
  validates :channel_id, presence: true

  def in_json_response_format
    {
      'content' => content,
      'user' => user.screen_name,
      'channel' => channel.name
    }
  end

  def in_message_index_response_format
    {
      'screenName' => user.screen_name,
      'content' => content,
      'timestamp' => (created_at - 4.hours).strftime('%l:%M %P')
    }
  end
end

