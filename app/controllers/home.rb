SlackClone::App.controllers :home do
  before do
    if request.request_method == "POST"
      body_parameters = request.body.read
      params.merge!(JSON.parse(body_parameters))
    end
  end

  post :index, :provides => :json do
    content_type :json
  end

end
