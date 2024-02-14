const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    age: Int!
    email: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!, age: Int!, email: String!): User!
    deleteUser(id: ID!): String!
  }
`);

module.exports = schema;
