module SlackClone
  class App < Padrino::Application
    register ScssInitializer
    use ConnectionPoolManagement
    register Padrino::Mailer
    register Padrino::Helpers
    enable :sessions
    register Padrino::WebSockets
    register Padrino::Sprockets

		websocket :channel do
			on :new_message do |new_message|
        current_user = User.find_or_create_by screen_name: new_message['user']
        channel = Channel.find_by(name: new_message['channel'])
        message = Message.create(
          user: current_user,
          channel: channel,
          content: new_message['content']
        )
        broadcast(:channel, message.in_json_response_format)
			end
		end

    # format/parse JSON post requests so that params are more accessible
    before do
      if request.request_method == "POST"
        body_parameters = request.body.read
        params.merge!(JSON.parse(body_parameters))
      end
    end

    get '/' do
      render 'home/index'
		end
  end
end

