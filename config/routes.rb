Rails.application.routes.draw do

  root 'welcome#home'

  get '/signup', to: 'users#new', as: 'signup'
  get '/login', to: 'sessions#new', as: 'login'
  get '/logout', to: 'sessions#destroy', as: 'logout'
  get '/auth/facebook/callback', to: 'sessions#create'

  resources :users
  resources :sessions
  resources :hikes
  
  resources :hikes do
    resources :comments, only: [:new, :edit]
  end

  get 'hikes/with_comments', to: 'hikes#with_comments'
end
