export interface IAuthor {
  _id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  bio: string;
}

export interface IReview {
  _id: string;
  reviewerName: string;
  title: string;
  message: string;
  rating: number;
}

export interface IBook {
  _id: string;
  title: string;
  description: string;
  author: IAuthor;
  reviews: IReview[];
}
