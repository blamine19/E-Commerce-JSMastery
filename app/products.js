// pages/products.js
import client from '../lib/client';

const fetchAllProducts = async () => {
  const query = `*[_type == "product"] {
    _id,
    title,
    description,
  }`;

  const products = await client.fetch(query);
  return products;
};

const ProductsPage = ({ products }) => {
  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const products = await fetchAllProducts();

  return {
    props: {
      products,
    },
  };
}

export default ProductsPage;
