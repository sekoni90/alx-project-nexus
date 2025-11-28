// types/product.ts
export type Category = 'Watch' | 'Cloth' | 'Shoe' | 'Belt' | string

export type Product = {
  id: string
  name: string
  category: Category
  price: number
  image: string
  rating?: number
  description?: string
}