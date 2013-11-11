Perfsurf::Application.routes.draw do
  root 'static#index'

  resources :static, only: [:index, :show]

  namespace :json do
    resources :locations
  end

end
