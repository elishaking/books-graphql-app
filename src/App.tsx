import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import "./App.scss";
import { BooksPage } from "./components/pages";

const apolloClient = new ApolloClient({
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:7000/graphql"
      : "/graphql",
  cache: new InMemoryCache(),
});

export function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <BooksPage />
      </div>
    </ApolloProvider>
  );
}
