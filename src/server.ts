import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { handlers, startServerAndCreateLambdaHandler } from "@as-integrations/aws-lambda";
import "dotenv/config";
import { resolvers } from "./gql/resolvers";

const schema = require("./gql/schema.ts");

const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = !isDevelopment;

const server = new ApolloServer({
  typeDefs: schema,
  resolvers
});

if (isDevelopment) startStandaloneServer(server, { listen: { port: 4000 } }).then(({ url }) => console.log(`🚀 Server ready at ${url}`));

export const graphqlHandler = isProduction
  ? startServerAndCreateLambdaHandler(server, handlers.createAPIGatewayProxyEventV2RequestHandler())
  : undefined;
