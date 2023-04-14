import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { BsBagCheckFill} from 'react-icons/bs';

import { useStateContext } from '@/context/StateContext';
import { runFireworks } from '@/lib/util';

const success = () => {

  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems(0);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();

  }, []);

  return (
    
      <div className='success-wrapper'>
        <div className='success'>
          <p className='icon'>
            <BsBagCheckFill/>
          </p>
          <h2>Thank you for your purchase!</h2>
          <p className='email-msg'>Check your email inbox for the receipt</p>
          <p className='description'>
            If you have any questions, please email
            <a className='email' href='mailto: mannie@bestheadphones.com'>
              mannie@bestheadphones.com
            </a>
          </p>
          <Link href='/'>
            <button
              type='button'
              width = '300px'
              className='btn'
            >
              Continue shopping
            </button>
          </Link>
        </div>

      </div>
      
  )
}

export default success