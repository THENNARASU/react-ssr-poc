import { useState } from 'react'

function ProductsPage({ products }) {
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/api/products`)
  const products = await res.json()
  return { props: { products } }
}

export default ProductsPage