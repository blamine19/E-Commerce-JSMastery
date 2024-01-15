import './styles/globals.css'
import { client } from './lib/client';



console.log("-----TEST---------TEST------------TEST------------TEST-----------TEST-------------")


const query = '*[_type == "product"]';
const products = await client.fetch(query)

console.log(products)


const Home = () => {
  return (
    <div>
      <div>Hello : </div>


    </div>
  );
};





export default Home;