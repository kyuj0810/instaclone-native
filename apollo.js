import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

export const isLoggedInVar = makeVar(false);

const client = new ApolloClient({
  uri: 'https://curly-regions-enter.loca.lt/graphql',
  //uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

export default client;
