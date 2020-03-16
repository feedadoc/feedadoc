Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"
  root 'home#index'
end
