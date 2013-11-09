Perfsurf::Application.routes.draw do
  root 'static#index'

  resources :static, only: [:index]

end
