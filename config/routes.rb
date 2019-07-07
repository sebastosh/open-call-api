Rails.application.routes.draw do
  resources :artworks
  resources :submits
  resources :calls
  resources :orgs
  resources :artists
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
