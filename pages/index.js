import React from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
import product from '@/ecoma/schemas/product';
import Image from 'next/image';
import banner from '@/ecoma/schemas/banner';
import { getProduct } from '@/ecoma/sanity-utils';
import { getBanner } from '@/ecoma/sanity-utils';


const Home = ({productss, bannerData}) => (
  <div >
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    
      
    <div className="products-heading" >
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
            
    </div>
    
    <div className="products-container" >
      {productss?.map(
        (product ) => <Product key={product._id} product={product}/>
      )}
    </div>
    
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export async function getStaticProps() {
  const productss = await getProduct();
  const bannerData = await getBanner();  
  return {
    props: {
      productss, bannerData
    },
  };
}

export default Home;