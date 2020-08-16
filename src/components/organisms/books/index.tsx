import React from "react";

import "./books.scss";
import { IBook } from "../../../interfaces";
import { Book } from "../../molecules";

interface TProps {
  books: IBook[];
}

export const Books = ({ books }: TProps) => {
  return (
    <ul className="books">
      {books.map((book) => (
        <Book key={book._id} book={book} />
      ))}
    </ul>
  );
};
