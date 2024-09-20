import React from 'react'
import LayOut from '../../componenet/LayOut/LayOut';
import Carouseleffect from '../../componenet/carousel/Carouseleffect';
import Category from '../../componenet/catagory/Catagory';
import Product from '../../componenet/product/Product';

function Landing() {
  return (
    <LayOut>
     
      <Carouseleffect />
      <Category />
      <Product/>
    </LayOut>
  );
}

export default Landing