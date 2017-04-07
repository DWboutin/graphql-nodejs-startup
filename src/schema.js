import { makeExecutableSchema } from 'graphql-tools';

var typeDefs = [`
type Query {
  hello: String
}

schema {
  query: Query
}`];

var resolvers = {
  Query: {
    hello(root) {
      return 'Hello world!';
    }
  }
};

export default makeExecutableSchema({typeDefs, resolvers});