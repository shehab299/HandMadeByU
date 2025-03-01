export type Shop = {
  id: number;
  name: string;
  description: string;
  userId: number;
  banner: string;
  logo: string;
};

export type CreatedShop = {
  name: string;
  description: string;
  logo?: FileList;
  banner?: FileList;
};

export type createdProduct = {
  name: string;
  price: number;
  // rating: number;
  description: string;
  quantity: number;
  image: string;
};

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  age: number;
};

export type Product = createdProduct & { id: string };
