import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/Product/ProductCard'
import Header from './components/Header/Header'

function App() {

  // const [product, setProduct] = useState({
  //   id: '1',
  //   title: 'backpack',
  //   price: '220',
  //   description: 'lorem ipsum foo bar john doe',
  //   category: "Men's clothing",
  //   image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  //   rating: {
  //     rate: '3.5',
  //     count: '200'
  //   }
  // })

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(res => setProducts(res))

    console.log(products)

  }, [])


  return (
    <>
      <div className="product-container">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </>
  )
}

export default App
