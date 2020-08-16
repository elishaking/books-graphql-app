import React from "react";

import "./book.scss";
import { IBook } from "../../../interfaces";

interface TProps {
  book: IBook;
}

export const Book = ({ book }: TProps) => {
  return (
    <div className="book">
      <h3>{book.title}</h3>
      <p>{book.description}</p>
      <button>More</button>
    </div>
  );
};