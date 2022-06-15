import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import backendGql from "../test-axios";

// const client = new ApolloClient({
//   uri: "https://graphqlzero.almansi.me/api",
//   cache: new InMemoryCache(),
//   connectToDevTools: true,
// });

const client = new ApolloClient({
  uri: "https://staging.back.mouqy.com/graphql",
  cache: new InMemoryCache(),
  credentials: "same-origin",
});

const GETAVAILABLETAGS = gql`
  query GetAvailableTags {
    availableTags
  }
`;

const GETPOST = gql`
  query {
    post(id: 1) {
      id
      title
      body
    }
  }
`;

const Test = () => {
  const { loading, error, data } = useQuery(GETAVAILABLETAGS, {
    errorPolicy: "all",
  });

  const getData = async () => {
    try {
      console.log("🚀 ~ loading ~ data");

      const data = await backendGql({
        method: "post",
        query: ` query GetAvailableTags {
        availableTags
      }`,
      });
      console.log("🚀 ~ getData ~ data", data);
    } catch (error) {
      console.log("🚀 ~ getData ~ error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("🚀  ~ loading", loading);
  console.log("🚀  ~ error", error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return <>{JSON.stringify(data)}</>;
};
// markup
const IndexPage = () => {
  return (
    <ApolloProvider client={client}>
      <Test></Test>
    </ApolloProvider>
  );
};

export default IndexPage;
