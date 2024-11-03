import { Resolvers } from "./generated/gql.types";

const resolvers: Resolvers = {
  Query: {
    hello: () => "world",
  },
};

export default resolvers;
