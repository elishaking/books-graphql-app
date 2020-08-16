import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import "./book.scss";
import { IBook } from "../../../interfaces";

export const BookPage = (
  props: RouteComponentProps<{}, {}, { id: string }>
) => {
  const bookId = props.history.location.state.id;
  const BOOK_QUERY = gql`
    query BookQuery {
      book(id: "${bookId}") {
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

  const { loading, error, data } = useQuery<{ book: IBook }>(BOOK_QUERY);

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
      {book.reviews.map((review) => {
        return (
          <div>
            <h4>{review.reviewerName}</h4>
          </div>
        );
      })}
    </div>
  );
};
