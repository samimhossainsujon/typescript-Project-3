import { Types } from 'mongoose';

export type TLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export type Details = {
  level: TLevel;
  description: string;
};

export type Tcourse = {
  title: string;
  instructor: string;
  categoryId: Types.ObjectId;
  price: number;
  tags: { name: string; isDeleted: boolean }[];
  startDate: string;
  endDate: string;
  language: string;
  provider: string;
  durationInWeeks?: number;
  details: Details;
};
