import React, {useState} from 'react'
import client from '@/lib/client';
import { getProduct, getSlugTwo } from '@/ecoma/sanity-utils';
import { getSlug } from '@/ecoma/sanity-utils';
import Image from 'next/image';
import { AiOutlineMinus,AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import product from '@/ecoma/schemas/product';
import { Product } from '@/components';


import banner from '@/ecoma/schemas/banner';
import { getBanner } from '@/ecoma/sanity-utils';

import { useStateContext } from '../../context/StateContext';


const ProductDetails = ({productst,producttd,qq}) => {
    const {image, name, details, price } = producttd;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, handleBuyNow} = useStateContext();
    //console.log(producttd)

    

    return(
        <div>        
            <div className='product-detail-container'>
                <div>
                    <div className='image-container' key={product._id}>
                        {producttd.map((product) => (
                            <div key={product._id}>
                                {product.image && (
                                    <Image 
                                    src={product.image} 
                                    alt={product.name}
                                    width={300}
                                    height={300}
                                    className='product-detail-image'
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    {/*
                    <div className='small-images-container'>
                        {producttd?.map((product, i) => (
                            <Image
                                src={product.image}
                                width={50}
                                height={50}
                                className=''
                                onMouseEnter=''
                            />
                        ))}

                        </div>*/}
                </div>
                <div className='product-detail-desc' key={product._id}>
                    {producttd.map((product) => (
                        <div key={product._id}>
                            {product.name && (
                                <h1>{product.name}</h1>
                            )}
                            <div className='reviews'>
                                <div>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiOutlineStar/>
                                </div>
                                <p>(20)</p>
                            </div>
                            <div>
                                <h4>Details:</h4>
                            </div>
                            <div>
                                {product.details && (
                                    <p>{product.details}</p>
                                )}
                            </div>
                            <div>
                                {product.details && (
                                    <p>{product.stripe}</p>
                                )}
                            </div>
                            <div className='price'>
                                {product.price && (
                                    <p>${product.price}</p>
                                )}
                            </div>
                            <div className='quantity'>
                                <h3>Quantity:</h3>
                                <p className='quantity-desc'>
                                    <span className='minus' onClick={decQty}>
                                        <AiOutlineMinus/>
                                    </span>
                                    <span className='num'>
                                        {qty}
                                    </span>
                                    <span className='plus' onClick={incQty}>
                                        <AiOutlinePlus/>
                                    </span>
                                </p>

                            </div>
                            <div className='buttons'>
                                <button type='button' className='add-to-cart' onClick={() => onAdd(product, qty)}>
                                    Add to Cart
                                </button>
                                <button type='button' className='buy-now'  onClick={ () => handleBuyNow(product,qty)}>
                                    Buy Now
                                </button>
                            </div>                    
                        </div>
                    ))}
                </div>

            </div>

            <div className='maylike-products-wrapper'>
                    <h2>You may also like</h2>
                    <div className='marquee' key={Product._id}>
                        <div className='maylike-products-container track' key={Product._id}>
                            {productst.map(
                                (item ) => <Product key={item._id} product={item}/>
                            )}
                        </div>

                    </div>

            </div>


        </div>
    )
}


export async function getStaticPaths () {
    const products = await getSlugTwo();
        
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }   
    }));
    
    return {
        paths,
        fallback: 'blocking' 
    };
}


export async function getStaticProps ({params:{slug}}) {

    const vv = {params:{slug}}

    const producttd = await getSlug(vv)
    const qq = {producttd};
    const productst = await getProduct();
    
    return {
      props: {
        producttd,
        productst,
        qq
      },   
};
    
}


export default ProductDetails

