SlackClone::App.controllers :messages do
  get :index, :with => :channel_name do
    messages = Channel.find_by(name: params[:channel_name]).try(:messages)
    if messages.present?
      user_messages = []
      messages.order(created_at: :desc).each do |message|
        user_messages << [message.user.screen_name, message.content]
      end
      return user_messages.to_json
    else
      return []
    end
  end
end

