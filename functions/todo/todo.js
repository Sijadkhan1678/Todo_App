const { ApolloServer, gql } = require('apollo-server-lambda')

const typeDefs = gql`
  `



const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }
