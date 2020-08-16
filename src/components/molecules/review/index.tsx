import React from "react";

import "./review.scss";
import { IReview } from "../../../interfaces";

interface TProps {
  review: IReview;
}

export const Review = ({ review }: TProps) => {
  return (
    <li className="review">
      <h4>
        {review.title} &middot; <small>{review.reviewerName}</small>
      </h4>
      <p>{review.message}</p>
      <h2>{review.rating}</h2>
    </li>
  );
};
