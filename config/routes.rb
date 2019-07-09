Rails.application.routes.draw do
  resources :artworks
  resources :submits
  resources :calls
  resources :orgs
  resources :artists

  post "/login", to: "auth#login"
  post "/signup", to: "artists#create"
  get "/profile", to: "artists#profile"

end
