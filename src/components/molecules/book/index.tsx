import React from "react";

import "./book.scss";
import { IBook } from "../../../interfaces";
import { Button } from "../../atoms";
import { useHistory } from "react-router-dom";

interface TProps {
  book: IBook;
}

export const Book = ({ book }: TProps) => {
  const history = useHistory();

  const navigateToBook = () => {
    history.push("/book", { id: book._id });
  };

  return (
    <li className="book">
      <h3>
        {book.title} &middot;{" "}
        <small>
          {book.author.firstName} {book.author.lastName}
        </small>{" "}
      </h3>
      <p>{book.shortDescription}</p>
      <Button onClick={navigateToBook}>More</Button>
    </li>
  );
};
