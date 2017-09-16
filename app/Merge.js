import { makeExecutableSchema } from 'graphql-tools'
import { merge } from 'lodash'

//typeDefs
import User from './types/User'

//Resolver
import UserResolver from './resolvers/UserResolver'

const schema = makeExecutableSchema({
    typeDefs: [User],
    resolvers: merge({}, UserResolver)
});

export default schema