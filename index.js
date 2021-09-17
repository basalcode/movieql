import { GraphQLServer } from 'graphql-yoga';

console.log('Hello');

const server = new GraphQLServer({
    // configuration, schema info
});

server.start(() => console.log("Graphql Server Running"));
