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
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
};

export type TCart = {
  id: String;
  qty: number;
};

export type TMenu = {
  id: number;
  label: string;
  href: string;
};
