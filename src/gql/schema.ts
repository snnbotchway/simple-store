const schema = `#graphql
  type Query {
    retrieveNumber: Int
  }

  type Mutation {
    storeNumber(num: Int!): Int
  }
`;

module.exports = schema;
