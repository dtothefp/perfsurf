Perfsurf::Application.routes.draw do
  root 'static#index'

  resources :static, only: [:index, :show]

  resources :users

  namespace :json do
    resources :locations
  end

end
