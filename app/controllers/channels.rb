SlackClone::App.controllers :channels do
  get :index do
    Channel.all.pluck(:name).to_json
  end

  post :index do
    new_channel = Channel.find_or_create_by(name: params['newChannel'])
    unless new_channel.blank?
      status 200
    else
      status 400
      body 'Oops!'
    end
  end
end

