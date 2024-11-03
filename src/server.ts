import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { handlers, startServerAndCreateLambdaHandler } from "@as-integrations/aws-lambda";
import { IS_DEVELOPMENT, IS_PRODUCTION } from "./config";
import { resolvers } from "./gql/resolvers";

const schema = require("./gql/schema.ts");

const server = new ApolloServer({
  typeDefs: schema,
  resolvers
});

if (IS_DEVELOPMENT) startStandaloneServer(server, { listen: { port: 4000 } }).then(({ url }) => console.log(`🚀 Server ready at ${url}`));

export const graphqlHandler = IS_PRODUCTION
  ? startServerAndCreateLambdaHandler(server, handlers.createAPIGatewayProxyEventV2RequestHandler())
  : undefined;
