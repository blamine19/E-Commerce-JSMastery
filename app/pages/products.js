import { client } from '../lib/client';


console.log("------------------------- products.js -------------------------")


const query = '*[_type == "product"]';
const products = await client.fetch(query)

console.log(products)

/*export const getServerSideProps = async () => {

  console.log("--------> getServerSideProps")

  const query = '*[_type == "product"]';
  products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}*/