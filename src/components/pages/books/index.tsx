import React from "react";
import { gql, useQuery } from "@apollo/client";

import { IBook } from "../../../interfaces";
import { Books } from "../../organisms";

const BOOKS_QUERY = gql`
  query BooksQuery {
    books(first: 10) {
      _id
      title
      description
      author {
        firstName
        bio
      }
      reviews {
        title
      }
    }
  }
`;

export const BooksPage = () => {
  const { loading, error, data } = useQuery<{ books: IBook[] }>(BOOKS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!data || data.books.length === 0) return <p>No Books</p>;

  return (
    <div>
      <h1>Books</h1>
      <Books books={data.books} />
    </div>
  );
};
