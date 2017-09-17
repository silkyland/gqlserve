import { makeExecutableSchema } from 'graphql-tools'
import { merge } from 'lodash'
import path from 'path'
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas'

// Merge TypeDefs
const typesArray = fileLoader(path.join(__dirname, './types'));
const typeDefs = mergeTypes(typesArray)
// Merge Resolvers
const resolversArray = fileLoader(path.join(__dirname, './resolvers'));
const resolvers = mergeResolvers(resolversArray);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema