import React from "react";
import { gql, useQuery } from "@apollo/client";

const BOOKS_QUERY = gql`
  query BooksQuery {
    books(last: 10) {
      title
      description
      author
      reviews
    }
  }
`;

export const BooksPage = () => {
  const { loading, error, data } = useQuery(BOOKS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <h1>Books</h1>
      {data}
    </div>
  );
};
