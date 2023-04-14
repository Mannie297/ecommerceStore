import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import Image from 'next/image';
import product from '@/ecoma/schemas/product';


const Product = ({product:{image, name, slug, price}}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <Image
            src= {image } 
            width={250}
            height={250}
            alt = {name}
            >            
          </Image>

          <p className='product-name' align ='center'>{name}</p>
          <p className='product-price' align='center'>${price}</p>
                    
        </div>
              
      </Link>
      
    </div>
  )
}

export default Product