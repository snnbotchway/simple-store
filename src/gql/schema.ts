const schema = `#graphql
  scalar Email

  type Query {
    number: Int!
    users: [User!]!
  }

  type Mutation {
    storeNumber(num: Int!): StoreNumberResponse!
    createUser(user: UserInput!): User!
  }

  type User {
    _id: ID!
    name: String!
    email: Email!
  }

  input UserInput {
    name: String!
    email: Email!
  }

  type StoreNumberResponse {
    hash: String
  }
`

module.exports = schema
