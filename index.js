import express from 'express';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser'
import chalk from 'chalk'

// app
import schema from './app/Merge'
import config from './config'
import './core/connection'

const server = express();

//Restrict the client-origin for security reasons.
server.use('*', cors({ origin: `${config.host}:${config.port}` }));

server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

server.listen(config.port, () => {
    console.log(chalk.green(`✨ ✨ GraphQL Server is now running on ${config.host}:${config.port} ✨ ✨`))
});