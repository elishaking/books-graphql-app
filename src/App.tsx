import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import "./App.scss";
import { BooksPage, BookPage } from "./components/pages";

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
        <Router>
          <Route path="/" component={BooksPage} exact />
          <Route path="/book" component={BookPage} exact />
        </Router>
      </div>
    </ApolloProvider>
  );
}
