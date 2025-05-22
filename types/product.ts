export interface Product {
  id: string
  name: string
  partNumber: string
  description: string
  price: number
  compatibility: string[]
  condition: string
  warranty: string
  images: string[]
  category: string
  manufacturer: string
  inStock: number
  specifications: {
    [key: string]: string
  }
  reviews: Review[]
}

export interface Review {
  id: string
  userId: string
  userName: string
  rating: number
  comment: string
  date: string
  verified: boolean
}

export interface CartItem {
  productId: string
  quantity: number
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  status: "pending" | "processing" | "shipped" | "delivered"
  shippingAddress: Address
  billingAddress: Address
  paymentStatus: "pending" | "paid" | "failed"
  total: number
  createdAt: string
  updatedAt: string
}

export interface Address {
  firstName: string
  lastName: string
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  phone: string
}

