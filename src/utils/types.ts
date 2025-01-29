import { SetStateAction } from "react";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export type PageProps = {
  params: Promise<{ id: number }>;
  searchParams: Promise<{}>;
};

export type TCart = {
  id: number;
  qty: number;
};

export type TCartItem = {
  onPrice: React.Dispatch<SetStateAction<number>>;
} & TCart;

export type TMenu = {
  id: number;
  label: string;
  href: string;
};
