Padrino.configure_apps do
  # enable :sessions
  set :session_secret, 'efd09d8844356ee21d7a827d3d652a836b493a5fc74350a96be9f0654951a81e'
  set :protection, :except => :path_traversal
  set :protect_from_csrf, false
end

# Mounts the core application for this project

Padrino.mount('SlackClone::App', :app_file => Padrino.root('app/app.rb')).to('/')

