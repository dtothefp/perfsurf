Perfsurf::Application.routes.draw do
  root 'static#index'

  resources :static, only: [:index, :show]

  resources :users

  resource :session, only: [:new, :create, :destroy]

  namespace :json do
    resources :locations
  end

end
