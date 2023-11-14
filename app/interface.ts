export interface simpleProduct {
  _id: string;
  imageUrl: string;
  price: string;
  slug: string;
  categoryName: string;
  name: string;
}

export interface fullProduct {
  _id: string;
  images: any;
  description: string;
  price: string;
  slug: string;
  categoryName: string;
  name: string;
}
