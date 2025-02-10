import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface ProductCardProps {
  id: string
  name: string
  image: string
  price: number
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, image, price }) => {
  return (
    <div className="border rounded shadow hover:shadow-lg transition p-4">
      <Image src={image} alt={name} width={400} height={192} layout="responsive" className="w-full h-48 object-cover" />
      <h3 className="mt-2 font-semibold">{name}</h3>
      <p className="text-blue-600 font-bold">${price.toFixed(2)}</p>
      <Link href={`/products/${id}`} className="text-sm text-blue-500 underline">
        Voir le produit
      </Link>
    </div>
  )
}

export default ProductCard