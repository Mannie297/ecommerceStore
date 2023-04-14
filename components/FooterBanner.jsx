import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const FooterBanner = ({footerBanner}) => {
  return (
    <div className="footer-banner-container">
      <div className='banner-desc'>
        <div className='left'>
          <p>{footerBanner.discount}</p>
          <h3>{footerBanner.largeText1}</h3>
          <h3>{footerBanner.largeText2}</h3>

        </div>
        <div className='right'>
          <p>{footerBanner.smallText}</p>
          <h3>{footerBanner.midText}</h3>
          <p>{footerBanner.desc}</p>

          <Link href={`/product/${footerBanner.product}`}>
            <button type='button'>{footerBanner.buttonText}</button>
          </Link>
        </div>

        <img
          src={footerBanner.image}
          width={600}
          height={500}
          alt={footerBanner.name}
          className = 'footer-banner-image'
        ></img>
        
      </div>
    </div>
  )
}

export default FooterBanner