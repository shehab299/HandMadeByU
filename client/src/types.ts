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