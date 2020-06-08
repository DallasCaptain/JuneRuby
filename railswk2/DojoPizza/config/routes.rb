Rails.application.routes.draw do
  
  get 'pizzas' => 'pizzas#index', as: 'pizzas'

  get 'pizzas/new'

  get 'pizzas/:id/edit' => 'pizzas#edit', as: 'editPizza'

  get 'pizzas/:id' => 'pizzas#show', as: 'showPizza'

  post 'pizzas' => 'pizzas#create'

  post 'pizzas/:id' => 'pizzas#update'

  delete 'pizzas/:id' => 'pizzas#destroy'
  
  root 'pizzas#index'

end
