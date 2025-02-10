import type { NextPage } from 'next'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'

const produits = [
  { id: '1', name: 'Produit 1', image: '/images/produit1.jpg', price: 29.99 },
  { id: '2', name: 'Produit 2', image: '/images/produit2.jpg', price: 39.99 },
  // Ajoute d'autres produits fictifs ici
]

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Bienvenue sur votre e-commerce</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {produits.map((produit) => (
          <ProductCard key={produit.id} {...produit} />
        ))}
      </div>
    </Layout>
  )
}

export default Home