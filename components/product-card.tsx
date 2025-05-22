"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart } from "lucide-react"
import type { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
  onAddToCart: (productId: string) => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const averageRating = product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative aspect-square">
        <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
      </div>

      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 hover:text-red-600 transition-colors">{product.name}</h3>
        </Link>

        <p className="text-sm text-gray-600 mt-1">Part #: {product.partNumber}</p>

        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(averageRating) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({product.reviews.length})</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>

          <button
            onClick={() => onAddToCart(product.id)}
            className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-2 
                     rounded-md hover:bg-red-700 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>

        <div className="mt-2 text-sm">
          <span className={`${product.inStock > 0 ? "text-green-600" : "text-red-600"}`}>
            {product.inStock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>
    </div>
  )
}

