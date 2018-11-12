Rails.application.routes.draw do

  root 'welcome#home'

  get '/signin', to: 'sessions#new'
  delete '/signout', to: 'sessions#destroy'
  post '/sessions/signup', to: 'sessions#create'
  get '/auth/facebook/callback' => 'sessions#create'
  get 'hikes/with_comments', to: 'hikes#with_comments'
  
  resources :hikes do
    resources :comments
  end
  
  resources :users
  resources :hikes
  resources :comments
end
