Rails.application.routes.draw do
  resources :artworks
  resources :submits
  resources :calls
  resources :orgs
  resources :artists

  post "/login", to: "auth#login"
  post "/signup", to: "artists#create"
  get "/profile", to: "artists#profile"

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  
end
