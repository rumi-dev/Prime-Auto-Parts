import Image from "next/image"
import { Star, Truck, Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Product } from "@/types/product"

// This would normally fetch from an API
async function getProduct(id: string): Promise<Product> {
  // Simulate API call
  return {
    id,
    name: "Engine Assembly 2.0L",
    partNumber: "EA2000-123",
    description: "Complete engine assembly for 2.0L models...",
    price: 2499.99,
    compatibility: ["Honda Civic 2018-2022", "Honda CR-V 2017-2021"],
    condition: "Used - Excellent",
    warranty: "6 months",
    images: ["/placeholder.svg"],
    category: "Engine",
    manufacturer: "Honda",
    inStock: 3,
    specifications: {
      "Engine Size": "2.0L",
      Cylinders: "4",
      Mileage: "45,000",
    },
    reviews: [
      {
        id: "1",
        userId: "user1",
        userName: "John D.",
        rating: 5,
        comment: "Perfect fit, great condition!",
        date: "2024-03-01",
        verified: true,
      },
    ],
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/products" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>

          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden cursor-pointer">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-gray-600 mt-2">Part #: {product.partNumber}</p>
          </div>

          <div className="flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
              ))}
            </div>
            <span className="ml-2 text-gray-600">({product.reviews.length} reviews)</span>
          </div>

          <div className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</div>

          <div className="space-y-4">
            <div className="flex items-center text-green-600">
              <Shield className="w-5 h-5 mr-2" />
              {product.warranty} Warranty
            </div>

            <div className="flex items-center text-blue-600">
              <Truck className="w-5 h-5 mr-2" />
              Free Shipping
            </div>
          </div>

          <div className="border-t border-b py-4">
            <h3 className="text-lg font-semibold mb-2">Compatibility</h3>
            <ul className="list-disc list-inside space-y-1">
              {product.compatibility.map((vehicle, index) => (
                <li key={index} className="text-gray-600">
                  {vehicle}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Specifications</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key}>
                  <dt className="text-gray-600">{key}</dt>
                  <dd className="font-medium">{value}</dd>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <button
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 
                           transition-colors flex items-center justify-center font-medium"
            >
              Add to Cart
            </button>

            <button
              className="w-full border border-gray-300 text-gray-700 py-3 rounded-md 
                           hover:bg-gray-50 transition-colors flex items-center justify-center font-medium"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Product Description</h2>
        <p className="text-gray-600">{product.description}</p>
      </div>

      {/* Reviews */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="space-y-6">
          {product.reviews.map((review) => (
            <div key={review.id} className="border-b pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="font-medium mt-1">{review.userName}</p>
                </div>
                <span className="text-gray-500">{review.date}</span>
              </div>
              <p className="mt-2 text-gray-600">{review.comment}</p>
              {review.verified && (
                <span className="inline-flex items-center mt-2 text-green-600 text-sm">
                  <Shield className="w-4 h-4 mr-1" />
                  Verified Purchase
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

