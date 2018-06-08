SlackClone::App.controllers :channel do
  get :index do
    Channel.all.pluck(:name).to_json
  end
end

