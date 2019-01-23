Rails.application.routes.draw do

  root 'welcome#home'

  get '/signup', to: 'users#new', as: 'signup'
  get '/login', to: 'sessions#new', as: 'login'
  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy', as: 'logout'
  get '/auth/facebook/callback', to: 'sessions#create'
  get '/hikes/recent', to: 'hikes#recent'
  map.search “search”, :controller => “search”
  # get '/search', to: 'hikes#search'

  resources :users, only: [:new, :create, :show] do
    resources :hikes, only: [:index, :new, :create, :show, :update]
  end
  
  resources :hikes, only: [:index, :show, :edit, :update, :destroy] do
    resources :comments
  end

end
