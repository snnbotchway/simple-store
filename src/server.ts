import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { handlers, startServerAndCreateLambdaHandler } from "@as-integrations/aws-lambda";
import "dotenv/config";
import fs from "fs";
import resolvers from "./gql/resolvers";

const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = process.env.NODE_ENV === "production";

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs: fs.readFileSync("./src/gql/schema.graphql", "utf8"),
  resolvers,
});

if (isDevelopment) {
  const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
  console.log(`🚀 Server ready at ${url}`);
}

export const graphqlHandler = isProduction
  ? startServerAndCreateLambdaHandler(server, handlers.createAPIGatewayProxyEventV2RequestHandler())
  : undefined;
