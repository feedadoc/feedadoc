# FeedADoc.com

This website connects healthcare workers (docs, nurses, specialists, support staff) with volunteers who can provide basic needs during the COVID-19 pandemic response. Please share with anyone you know who needs assistance or can provide it!

> This project is the upcoming rebuild of FeedADoc.com, which is currently using Google Sites.

## Tech Stack

* [Rails](https://rubyonrails.org/)
* [React](https://reactjs.org/)
* [GraphQL](https://graphql-ruby.org/)
* [Apollo Client](https://www.apollographql.com/docs/react/)
* [Material UI](https://material-ui.com/)

## Development

1. Fork the repo.
1. Clone your fork to your local machine.
1. Use `psql` to create a PG user called `feedadoc`. (We assume you have postgresql installed, on OS X you can use `brew` to install it or run [Postgres.app](https://postgresapp.com/).)

        CREATE USER feedadoc WITH SUPERUSER PASSWORD 'password1';

1. Install Ruby v2.7.0 (see `.ruby-version`; also, we recommend [rvm](https://rvm.io/rvm/install) to manage ruby versions.)
1. Run `bundle`
1. Install Yarn (On OS X: `brew install yarn`)
1. Run `yarn`
1. Run `rails db:create db:migrate`
1. In one Terminal window, run `bin/webpack-dev-server`. In a second window, run `rails s`.
1. Visit http://localhost:3000
