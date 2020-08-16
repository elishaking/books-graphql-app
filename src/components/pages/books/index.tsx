import React from "react";
import { gql, useQuery } from "@apollo/client";

import { IBook } from "../../../interfaces";

const BOOKS_QUERY = gql`
  query BooksQuery {
    books(first: 10) {
      _id
      title
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

  console.log(data);

  return (
    <div>
      <h1>Books</h1>
      {data.books.map((book) => {
        return (
          <div key={book._id}>
            <h1>{book.title}</h1>
          </div>
        );
      })}
    </div>
  );
};
