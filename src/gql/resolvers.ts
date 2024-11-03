import { Resolvers } from "./generated/gql.types";

export const resolvers: Resolvers = {
  Query: {
    hello: () => "world"
  }
};
