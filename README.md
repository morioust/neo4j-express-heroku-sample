# neo4j-express-heroku-sample

This sample shows how to bootstrap a sample [Neo4j](https://neo4j.org) project on [Heroku](https://heroku.com/) using [Node](https://nodejs.org/en/) and [Express](http://expressjs.com/).

The Heroku Neo4j add-on used for this example is a free [GrapheneDB](https://elements.heroku.com/addons/graphenedb) instance, but other options are available.

## Usage

### Run locally

1. Download, setup and start a [Neo4j instance](https://neo4j.com/download/)
2. Clone this repository
3. Create a `.env` configuration (see `.env.sample` for a reference)
4. Install dependencies: `npm install`
5. Start your local express instance: `npm start`
6. Launch: http://localhost:3000

### Deploy to Heroku
This assumes that you have a working Heroku account and and the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) tools installed.

1. Clone this repository
2. Create a new Heroku app: `heroku create`
3. Add a GrapheneDB Neo4j instance: `heroku addons:create graphenedb:chalk`
4. Push repository to Heroku: `git push heroku master`
5. Launch: `heroku open`

## License
MIT
