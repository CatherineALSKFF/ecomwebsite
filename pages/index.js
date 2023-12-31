import React from 'react'

import {client } from '../lib/client'

import { Product, HeroBanner, FooterBanner} from '../components'

const Home = () => {
  return (
    <>

     <HeroBanner/>

     <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Painting of many variations</p>
     </div>

     <div className='products-container'>
      {['Product 1', 'Product 2'].map((product)=>product)}
     </div>

     <FooterBanner/>

     
    </>
  );
}

export default Home