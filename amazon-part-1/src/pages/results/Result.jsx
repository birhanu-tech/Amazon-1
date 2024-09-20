import React, { useEffect, useState } from "react";
import classes from "./result.module.css";
import LayOut from "../../componenet/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endpoints";
import ProductCard from "../../componenet/product/ProductCard";
import Loader from "../../componenet/Loder/Loder";


function Result() {
  const [result, setResults] = useState([]);
  const { categoryName } = useParams();
   const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`) // Correct the typo
      .then((res) => {
        setResults(res.data);
        console.log(res.data);
        isload
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryName]); // Add categoryName to dependency array

  return (
    <LayOut>
       {isLoading ? (
        <Loader />
      ) : (
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        
        
        <div className={classes.products_container}>
          {result?.map(
            (
              product // Use results instead of Result
            ) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            )
          )}
        </div>
      </section>
      )}
    </LayOut>
  );
}

export default Result;
