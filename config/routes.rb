Perfsurf::Application.routes.draw do
  root 'users#new'

  resources :static, only: [:index, :show]

  resources :users 

  resources :locations, only: [:index, :show]

  resource :session, only: [:new, :create, :destroy]

  namespace :json do
    resources :locations
  end

  resources :users, shallow: true do
    resources :favorites
  end

  namespace :admin do
    resources :users
    resources :locations
  end

  resources :favorites, only: [:create, :destroy]

end
