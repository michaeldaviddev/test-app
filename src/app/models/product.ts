export interface Product {
  id: number;
  thumbnail: string;
  title: string;
  sku: string;
  brand: string;
  category: string;
  price: number;
  discountPercentage: number;
  stock: number;
  availabilityStatus: string;
  description: string;
  tags: string[];
}
