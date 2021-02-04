# HospitalHero (previously known as Feed a Doc)

> This project has now ended. Thank you to all our wonderful volunteers who made it possible.

HospitalHero connects healthcare workers (docs, nurses, specialists, support staff) with volunteers who can provide basic needs during the COVID-19 pandemic response. Please share with anyone you know who needs assistance or can provide it!

We'd love your help! Please [join us in Slack](https://docs.google.com/forms/d/e/1FAIpQLSeAXlls9dtfW8Eu6OBvfNT1J8nhOHJ4nC2QrryNlsVogRGsFA/viewform).

## Tech Stack

- [Rails](https://rubyonrails.org/)
- [React](https://reactjs.org/)
- [GraphQL](https://graphql-ruby.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [Material UI](https://material-ui.com/)

## Development

The below steps assume you've forked and cloned the repo to your local machine.

### Running Ruby and Postgres locally

1.  Bootstrap postgres [with Docker](#running-postgres-with-docker) or [locally](#running-postgres-locally)
2.  Install Ruby v2.7.0 (see `.ruby-version`; also, we recommend [rvm](https://rvm.io/rvm/install) to manage ruby versions.)
3.  Run `bundle`
4.  Install Yarn (On OS X: `brew install yarn`)
5.  Run `yarn`
6.  Run `rails db:create db:migrate`
7.  In one Terminal window, run `bin/webpack-dev-server`. In a second window, run `rails s`.
8.  Visit http://localhost:3000
9.  If working with emails, map localhost to `mailcatcher` in your `/etc/hosts` file and run `gem install --no-document mailcatcher && mailcatcher` in another window.

### Running Postgres with Docker

Install [Docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/)

1. `docker-compose up -d`
2. Prefix rails commands with the database url, like this: `export DATABASE_URL="postgresql://127.0.0.1/feedadoc_development?pool=5" && rails s`

### Running Postgress Locally

Install [Postgres](https://www.postgresql.org/download/) (on OS X you can use `brew` to install it or run [Postgres.app](https://postgresapp.com/)

1. Use `psql` to create a PG user called `feedadoc`.

```
CREATE USER feedadoc WITH SUPERUSER PASSWORD 'password1';
```

### GraphiQL

Visit http://localhost:3000/graphiql to access the in-browser GraphQL IDE.
