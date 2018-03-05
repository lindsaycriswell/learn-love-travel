Rails.application.routes.draw do

  resources :users do
    post '/maketrip' => 'trips#create'
    patch '/trips/:trip_id' => 'trips#update'
    get '/yourtrips' => 'trips#index'
  end

  namespace :api do
    namespace :v1 do
      resources :locations, only: [:index, :show]
      resources :attractions, only: [:index, :show]
    end
  end

  post '/checkuser' => 'users#check_user'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
