# FeedADoc.com

[![CircleCI](https://circleci.com/gh/cantino/feedadoc.svg?style=svg)](https://circleci.com/gh/cantino/feedadoc)

This website connects healthcare workers (docs, nurses, specialists, support staff) with volunteers who can provide basic needs during the COVID-19 pandemic response. Please share with anyone you know who needs assistance or can provide it!

> This project is the upcoming rebuild of FeedADoc.com, which is currently using Google Sites.

We'd love your help! Please [see the project for a prioritized list of issues (tasks)](https://github.com/cantino/feedadoc/projects/1).

## Tech Stack

* [Rails](https://rubyonrails.org/)
* [React](https://reactjs.org/)
* [GraphQL](https://graphql-ruby.org/)
* [Apollo Client](https://www.apollographql.com/docs/react/)
* [Material UI](https://material-ui.com/)

## Development
The below steps assume you've forked and cloned the repo to your local machine.

### With Docker
1. `docker-compose up -d`
2. `docker-compose run web rails db:migrate db:create`
3. Visit http://localhost:3000

### Running Ruby and Postgres locally
1. Use `psql` to create a PG user called `feedadoc`. (We assume you have postgresql installed, on OS X you can use `brew` to install it or run [Postgres.app](https://postgresapp.com/).)

        CREATE USER feedadoc WITH SUPERUSER PASSWORD 'password1';

2. Install Ruby v2.7.0 (see `.ruby-version`; also, we recommend [rvm](https://rvm.io/rvm/install) to manage ruby versions.)
3. Run `bundle`
4. Install Yarn (On OS X: `brew install yarn`)
5. Run `yarn`
6. Run `rails db:create db:migrate`
7. In one Terminal window, run `bin/webpack-dev-server`. In a second window, run `rails s`.
8. Visit http://localhost:3000
9. If working with emails, map localhost to `mailcatcher` in your `/etc/hosts` file.

## Working with Docker
Running Rails with Docker is slightly more nuanced than out of the box Rails. Depending on your system, you may run into permission issues if you try to `bundle` locally while running the server on Docker. As such, it's best to only issue commands through Docker. Here are some common commands:
```bash
# Start the server
./scripts/local start

# Stop the server 
./scripts/local stop

# Restart the server
./scripts/local restart
```

And to run commands you'd typically run locally, like "rails generate":
```
./scripts/local run "rails generate ..."
```

