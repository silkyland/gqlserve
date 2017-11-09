import express from 'express';
import cors from 'cors'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import passport from 'passport'
import flash from 'connect-flash'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import session from 'express-session'
import jwt from 'jsonwebtoken'
import chalk from 'chalk'
import ejs from 'ejs'
import path from 'path'

import passportConfig from './app/auth/passport'

// app
import { api as RouteApi, web as RouteWeb } from './app/routes'
import schema from './app/Merge'
import config from './config'
import './core/connection'

const app = express()
const port = process.env.PORT || config.defaultPort

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms
app.use(session({ secret: config.secretKey })) // session secret
app.use(passport.initialize())
app.use(passport.session()) // persistent login sessions
app.use(flash()) // use connect-flash for flash messages stored in session
passportConfig(passport)
app.set('superSecret', config.secretKey)
app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'ejs')

// routes ======================================================================
RouteWeb(app, passport)
app.use('*', cors({ origin: `${config.host}:${port}` }))
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
app.use('/api', RouteApi)

app.listen(port, () => {
    console.log(chalk.green(`✨ ✨ GraphQL Server is now running on ${config.host}:${port} ✨ ✨`))
});