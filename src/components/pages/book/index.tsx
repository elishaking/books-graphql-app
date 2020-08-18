import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import "./book.scss";
import { IBook } from "../../../interfaces";
import { Reviews } from "../../organisms";

const BOOK_QUERY = gql`
  query BookQuery($id: String!) {
    book(id: $id) {
      _id
      title
      description
      author {
        firstName
        lastName
        dateOfBirth
        bio
      }
      reviews {
        reviewerName
        title
        message
        rating
      }
    }
  }
`;

export const BookPage = (
  props: RouteComponentProps<{}, {}, { id: string }>
) => {
  const bookId = props.history.location.state.id;

  const { loading, error, data } = useQuery<{ book: IBook }>(BOOK_QUERY, {
    variables: { id: bookId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!data || !data.book) return <p>Book not found</p>;

  const book = data.book;

  return (
    <div className="book-page">
      <h2>
        {book.title} &middot;{" "}
        <small>
          {book.author.firstName} {book.author.lastName}
        </small>{" "}
      </h2>
      <p>{book.description}</p>

      <h3>Author details</h3>
      <h2>
        {book.author.firstName} {book.author.firstName}
      </h2>
      <small>
        {new Date(parseInt(book.author.dateOfBirth)).toDateString()}
      </small>
      <p>{book.author.bio}</p>

      <h3>Reviews</h3>
      <Reviews reviews={book.reviews} />
    </div>
  );
};
