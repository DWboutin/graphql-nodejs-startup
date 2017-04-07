import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './data/schema.graphql';

var resolvers = {
  Query: {
    hello(root) {
      return 'Hello world!';
    }
  }
};

export default makeExecutableSchema({typeDefs, resolvers});