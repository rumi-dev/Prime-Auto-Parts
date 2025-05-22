"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ShoppingCartIcon as CartIcon } from "lucide-react"
import type { CartItem, Product } from "@/types/product"

interface ShoppingCartProps {
  items: (CartItem & { product: Product })[]
  onUpdateQuantity: (productId: string, quantity: number) => void
  onRemoveItem: (productId: string) => void
}

export default function ShoppingCart({ items, onUpdateQuantity, onRemoveItem }: ShoppingCartProps) {
  const [isOpen, setIsOpen] = useState(false)

  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  return (
    <div className="relative">
      {/* Cart Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 bg-white p-2 rounded-md hover:bg-gray-100"
      >
        <CartIcon className="w-6 h-6" />
        <span className="font-medium">{items.length}</span>
      </button>

      {/* Cart Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg z-50">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Shopping Cart</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-500">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="p-4 text-center text-gray-500">Your cart is empty</div>
          ) : (
            <>
              <div className="max-h-96 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.productId} className="p-4 border-b flex items-center">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={item.product.images[0] || "/placeholder.svg"}
                        alt={item.product.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>

                    <div className="ml-4 flex-grow">
                      <h4 className="font-medium">{item.product.name}</h4>
                      <p className="text-sm text-gray-600">Part #: {item.product.partNumber}</p>

                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => onUpdateQuantity(item.productId, Math.max(0, item.quantity - 1))}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            +
                          </button>
                        </div>

                        <span className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.productId)}
                      className="ml-4 text-gray-400 hover:text-red-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium">Total:</span>
                  <span className="text-xl font-bold">${total.toFixed(2)}</span>
                </div>

                <button
                  onClick={() => {
                    /* Handle checkout */
                  }}
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 
                           transition-colors flex items-center justify-center"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

