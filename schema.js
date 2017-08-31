export default `

  type Query {
    get(key: String!): String
  }

  type Mutation {
    set(key: String!, value: String!): Boolean!
  }

`;
