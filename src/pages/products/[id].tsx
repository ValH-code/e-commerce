import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Layout from '../../components/Layout'
import Image from 'next/image'

interface Product {
  id: string
  name: string
  description: string
  image: string
  price: number
}

interface ProductPageProps {
  product: Product
}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-6">
        <Image src={product.image} alt={product.name} className="w-full md:w-1/2 object-cover" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-4">{product.description}</p>
          <p className="mt-4 text-2xl font-bold text-blue-600">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Pour l'exemple, on définit manuellement quelques chemins.
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
  ]
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Simule la récupération des données en fonction de l'ID
  const products: Product[] = [
    {
      id: '1',
      name: 'Produit 1',
      description: 'Description détaillée du produit 1.',
      image: '',
      price: 29.99,
    },
    {
      id: '2',
      name: 'Produit 2',
      description: 'Description détaillée du produit 2.',
      image: '',
      price: 39.99,
    },
  ]
  const product = products.find(p => p.id === params?.id)
  return { props: { product } }
}

export default ProductPage