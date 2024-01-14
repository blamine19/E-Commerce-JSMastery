import Image from 'next/image'
import './styles/globals.css'
//import { Product, HeroBanner, FooterBanner } from './components';

import Product from './components/Product';
import HeroBanner from './components/HeroBanner';
import FooterBanner from './components/FooterBanner';
import { Footer } from './components';
import { client } from './lib/client';




export default function Home({ products, bannerData }) {

  const getServerSideProps = async () => {
  
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
  
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
  
    return {
      props: { products, bannerData }
    }
  }



  return (

    <>
      <HeroBanner />

      {
        console.log(products)
      }


      <div className='products-heading'>
        <h1>Best Selling Products</h1>

        Speakers of many variations
      </div>


      <div className='products-container'>
        {products?.map((product) => (product.name))}

      </div>

      <Footer />

    </>

  )
}



