import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Mon E-commerce
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/products">
                Produits
              </Link>
            </li>
            <li>
              <Link href="/about">
                À propos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header