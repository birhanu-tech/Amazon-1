import React, { useEffect, useState } from 'react'
import LayOut from '../../componenet/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import { productUrl } from '../../Api/endpoints'
import axios from 'axios'
import Loader from '../../componenet/Loder/Loder'
import ProductCard from '../../componenet/product/ProductCard'

function ProductDetail() {
  const { productId } = useParams();
  const [isLoading, setisLoading] = useState(false)
  const [product, setProduct] = useState({})
  useEffect(() =>{
    setisLoading(true)
     axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      console.log(res)
      setProduct(res.data);
       setisLoading(false)
    }).catch((err)=>{
      console.log(err)
      setisLoading(false)
    })


  },[])
  return (
    <LayOut>
      {isLoading ? (<Loader />) : (<ProductCard product={product} 
      flex={true}
      renderAdd={true}
      renderDesc={true}
      
      />)}
    </LayOut>
  );
}

export default ProductDetail