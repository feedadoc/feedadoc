Rails.application.routes.draw do
  mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql" if Rails.env.development?
  post "/graphql", to: "graphql#execute"
  root 'home#index'
  get 'cookie-policy', to: 'legal#cookie_policy'
  get 'disclaimer', to: 'legal#disclaimer'
  get 'terms-of-use', to: 'legal#terms_of_use'
  get 'privacy-policy', to: 'legal#privacy_policy'
  match '*path' => 'home#index', via: :get
end
