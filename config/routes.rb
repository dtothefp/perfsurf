Perfsurf::Application.routes.draw do
  root 'locations#index'

  resources :users 

  resources :locations, only: [:index, :show]

  resource :session, only: [:new, :create, :destroy]

  namespace :json do
    resources :locations
  end

  namespace :admin do
    resources :users
    resources :locations
  end

  resources :favorites, only: [:create, :destroy]

end
