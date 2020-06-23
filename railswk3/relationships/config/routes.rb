Rails.application.routes.draw do
  get '/' => 'user#index'
  get '/ns' => 'user#notshow'
  get '/as' => 'user#alsoshow'
  get '/users' => 'user#index'
  get '/users/new' => 'user#new'
  post '/users' => 'user#create'

end
