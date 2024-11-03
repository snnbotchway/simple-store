import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import fs from "fs";

const resolvers = {
  Query: {
    hello: () => "world",
  },
};

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs: fs.readFileSync("./src/gql/schema.graphql", "utf8"),
  resolvers,
});

// TODO: remove this
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`🚀 Server ready at ${url}`);

// TODO: enable this
// export const graphqlHandler = startServerAndCreateLambdaHandler(server, handlers.createAPIGatewayProxyEventV2RequestHandler());
