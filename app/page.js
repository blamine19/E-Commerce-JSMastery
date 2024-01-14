import Image from 'next/image'
import './styles/globals.css'
//import { Product, HeroBanner, FooterBanner } from './components';

import Product from './components/Product';
import HeroBanner from './components/HeroBanner';
import FooterBanner from './components/FooterBanner';
import { Footer } from './components';


const Product_item = ({ id, name, price }) => (
  <p>
    {id}
    {name}
    {price}
  </p>

);


const ProductsTable = ({ products }) => (
  <>

    {products.map((product) => (
      <Product_item key={product.id} {...product} />
    ))}
  </>

);



export default function Home() {

  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    // ... more products
  ];



  return (

    <>
      <HeroBanner />
      <div className='products-heading'>
        <h1>Best Selling Products</h1>

        Speakers of many variations
      </div>



      <div className='products-container'>

      </div>

      <ProductsTable products={products} />


      <Footer />


    </>


  )
}
