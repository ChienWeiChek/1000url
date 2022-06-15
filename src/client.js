import React from "react"

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as OriApolloProvider,
} from "@apollo/client"

const client = new ApolloClient({
  uri: "https://staging.back.mouqy.com/graphql",
  cache: new InMemoryCache(),
})

const ApolloProvider = ({ children }) => {
  return <OriApolloProvider client={client}>{children}</OriApolloProvider>
}

export default ApolloProvider
