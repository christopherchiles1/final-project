Rails.application.routes.draw do

  root to: 'static_pages#root'
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  get 'static_pages/root'
end
