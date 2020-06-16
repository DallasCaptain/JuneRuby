Rails.application.routes.draw do
  get '/' => 'user#show'
  get '/ns' => 'user#notshow'
  get '/as' => 'user#alsoshow'
end
