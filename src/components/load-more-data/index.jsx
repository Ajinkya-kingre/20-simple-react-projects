import React, { useEffect, useState } from "react";
import "../load-more-data/styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count*20
        }`
      );

      const data = await res.json();

      if (data && data.products && data.products.length) {
        setProducts(prevData=>[...prevData, ...data.products]);
        setLoading(false);
      }
      console.log(data);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(()=>{
    if(products && products.length === 100)setDisableBtn(true);
  }, [products])

  if (loading) {
    return <div>Loading the Data! Please wait.</div>;
  }
  return (
    <div className="load-more-container">
      <div className="products-container">
        {products && products.length
          ? products.map((product) => (
              <div className="products" key={products.id}>
                <img src={product.thumbnail} alt={product.title} />
                <h5>{product.title}</h5>
              </div>
            ))
          : null}
      </div>
      <div className="btn" ><button disabled={disableBtn} onClick={()=> setCount(count+1)}>Load More Products</button></div>
      {
        disableBtn?<h5>You have reached to 100 products</h5>:null
      }
    </div>
  );
}
