import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
import { getBanner } from '@/ecoma/sanity-utils';
import Image from 'next/image';
import banner from '@/ecoma/schemas/banner';
import { client } from '../lib/client';
import product from '@/ecoma/schemas/product';


const HeroBanner = ({ heroBanner}) => {

  
  return (
    <div className="hero-banner-container">
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1 className='beats-solo2'>{heroBanner.largeText1}</h1>
        <img src={heroBanner.image} className='hero-banner-image' alt={heroBanner.name}></img>
        
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
            
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const bannerHeroData = await getBanner();
 
  return {
    props: {
      bannerHeroData
    },
    
  };
}


export default HeroBanner