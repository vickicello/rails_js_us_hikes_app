Rails.application.routes.draw do

  root 'welcome#home'

  get '/signup', to: 'users#new', as: 'signup'
  get '/login', to: 'sessions#new', as: 'login'
  get '/logout', to: 'sessions#destroy', as: 'logout'
  get '/auth/facebook/callback', to: 'sessions#create'
  get 'hikes/with_comments', to: 'hikes#with_comments'

  resources :users, only: [:new, :create, :show] do
    resources :hikes, only: [:index, :new, :create, :show]
  end

  resources :sessions, only: [:create] #for the bcrypt signup?
  resources :hikes, only: [:show, :edit, :update, :destroy]

  resources :comments
end
