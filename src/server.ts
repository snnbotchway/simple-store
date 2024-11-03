import { ApolloServer, BaseContext } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { handlers, startServerAndCreateLambdaHandler } from "@as-integrations/aws-lambda"
import { DEBUG } from "./config"
import { resolvers } from "./gql/resolvers"

const schema = require("./gql/schema.ts")

const server = new ApolloServer<BaseContext>({
    typeDefs: schema,
    resolvers
})

if (DEBUG) startStandaloneServer(server, { listen: { port: 4000 } }).then(({ url }) => console.log(`🚀 Server ready at ${url}`))

export const graphqlHandler = !DEBUG
    ? startServerAndCreateLambdaHandler(server, handlers.createAPIGatewayProxyEventV2RequestHandler())
    : undefined
