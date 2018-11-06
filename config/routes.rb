Rails.application.routes.draw do

  root 'welcome#home'

  get '/signin', to: 'sessions#new'
  delete '/signout', to: 'sessions#destroy'
  post '/sessions/signup', to: 'sessions#create'
  
end
