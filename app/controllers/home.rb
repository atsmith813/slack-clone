SlackClone::App.controllers :home do

  get :index, :provides => :json do
    Account.first.to_json
  end

end
