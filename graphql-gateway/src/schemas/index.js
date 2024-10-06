const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
  }

  type Order {
    id: ID!
    productId: ID!
    userId: ID!
    quantity: Int!
    status: String!
  }

  type Query {
    getUsers: [User]
    getUser(id: ID!): User
    getProducts: [Product]
    getProduct(id: ID!): Product
    getOrders: [Order]
    getOrder(id: ID!): Order
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    createProduct(name: String!, description: String!, price: Float!): Product
    createOrder(productId: ID!, userId: ID!, quantity: Int!): Order
  }
`;

module.exports = typeDefs;
