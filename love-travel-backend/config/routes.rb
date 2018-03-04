Rails.application.routes.draw do

  resources :users

  namespace :api do
    namespace :v1 do
      resources :locations, only: [:index, :show]
      resources :attractions, only: [:index, :show]
    end
  end

  post '/check_user' => 'users#check_user'
  post '/make_trip' => 'users#make_trip'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
