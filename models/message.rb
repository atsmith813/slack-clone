class Message < ActiveRecord::Base
  belongs_to :channel
  belongs_to :user

  validates :content, presence: true
  validates :user_id, presence: true
  validates :channel_id, presence: true

  def in_json_response_format
    {
      "content" => content,
      "user" => user.screen_name,
      "channel" => channel.name,
      "new_message" => [user.screen_name, content]
    }
  end
end

