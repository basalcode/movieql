import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

console.log('Hello');

const server = new GraphQLServer({
    // configuration, schema info
    typeDefs: "graphql/schema.graphql",
    resolvers
});

server.start(() => console.log("Graphql Server Running"));
