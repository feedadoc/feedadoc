Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"
  root 'home#index'
  match '*path' => 'home#index', via: :get
end
