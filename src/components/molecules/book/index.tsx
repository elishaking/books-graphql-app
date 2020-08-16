import React from "react";

import "./book.scss";
import { IBook } from "../../../interfaces";
import { Button } from "../../atoms";

interface TProps {
  book: IBook;
}

export const Book = ({ book }: TProps) => {
  return (
    <li className="book">
      <h3>
        {book.title} &middot;{" "}
        <small>
          {book.author.firstName} {book.author.lastName}
        </small>{" "}
      </h3>
      <p>{book.shortDescription}</p>
      <Button>More</Button>
    </li>
  );
};
