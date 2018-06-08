SlackClone::App.controllers :home do
  post :index, :provides => :json do
    content_type :json
  end

end

