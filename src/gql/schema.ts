const schema = `#graphql
  type Query {
    number: Int!
    users: [User!]!
  }

  type Mutation {
    storeNumber(num: Int!): Int!
    createUser(user: UserInput!): User!
  }

  type User {
    _id: ID!
    name: String!
    email: String!
  }

  input UserInput {
    name: String!
    email: String!
  }
`

module.exports = schema
