Rails.application.routes.draw do

  root 'welcome#home'

  get '/login', to: 'sessions#new', :as => :login
  get '/logout', to: 'sessions#destroy'
  post '/sessions/signup', to: 'sessions#create'
  get '/auth/facebook/callback', to: 'sessions#create'
  get 'hikes/with_comments', to: 'hikes#with_comments'
  
  resources :hikes do
    resources :comments
  end
  
  resources :users, only: [:new, :create]
  resources :hikes
  resources :comments
end
