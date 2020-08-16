import React from "react";
import { RouteComponentProps } from "react-router-dom";

export const BookPage = (
  props: RouteComponentProps<{}, {}, { id: string }>
) => {
  console.log(props.history.location.state.id);

  return (
    <div>
      <h1>Book</h1>
    </div>
  );
};
