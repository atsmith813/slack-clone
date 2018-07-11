SlackClone::App.controllers :messages do
  get :index, :with => :channel_name do
    messages = Channel.find_by(name: params[:channel_name]).try(:messages)
    if messages.present?
      user_messages = messages.order(created_at: :desc).group_by{ |message| (message.created_at - 4.hours).strftime("%A, %B #{ordinalize(message.created_at.day)}") }.each do |date, messages|
        messages.sort_by!(&:created_at).map! { |m| m.in_message_index_response_format }
      end
      return user_messages.to_json
    else
      return []
    end
  end
end

