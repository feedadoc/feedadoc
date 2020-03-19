class FeedADocSchema < GraphQL::Schema
  query(Types::QueryType)
  mutation(Types::MutationType)

  # Opt in to the new runtime (default in future graphql-ruby versions)
  use GraphQL::Execution::Interpreter
  use GraphQL::Analysis::AST

  # Add built-in connections for pagination
  use GraphQL::Pagination::Connections
end
