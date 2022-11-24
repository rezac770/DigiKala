import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const getproducts = async () => {
    const res = await fetch(`http://localhost:3004/Products`);
    const data = await res.json();
    setProducts(data);
  };
  useEffect(() => {
    getproducts();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="products">
      <h5>دسته بندی های دیجی کالاها</h5>
      <div className="parent-products">
        {products.map((product) => (
          <div key={product.id} className="box-products">
            <img src={product.pic} alt="" />
            <span>{product.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
