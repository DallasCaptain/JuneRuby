Rails.application.routes.draw do
  
  get 'pizzas' => 'pizzas#index', as: 'pizzas'

  get 'pizzas/new'

  get 'pizzas/edit'

  get 'pizzas/show'

  post 'pizzas' => 'pizzas#create'

  root 'pizzas#index'
end
