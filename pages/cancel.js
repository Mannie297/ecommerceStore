import React from 'react';
import Link from 'next/link';
import { BsBagCheckFill} from 'react-icons/bs';

const cancel = () => {
  return (
    <div className='success-wrapper'>
        <div className='success'>
          <p className='icon'>
            <BsBagCheckFill/>
          </p>
          <h2 align ='center'>Sorry to see you go! Please let us know how best to serve you.</h2>
          
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

export default cancel