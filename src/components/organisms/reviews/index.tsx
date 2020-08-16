import React from "react";

import "./reviews.scss";
import { IReview } from "../../../interfaces";
import { Review } from "../../molecules";

interface TProps {
  reviews: IReview[];
}

export const Reviews = ({ reviews }: TProps) => {
  return (
    <ul className="reviews">
      {reviews.map((review) => (
        <Review key={review._id} review={review} />
      ))}
    </ul>
  );
};
