type Rating = {
  rate: number;
  count: number;
};

export interface Product {
  id: number;
  title: string;
  price: number;
  description: number;
  category: string;
  image: string;
  rating: Rating;
}
