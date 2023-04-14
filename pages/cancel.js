import React from 'react'
import Link from 'next/link'

const cancel = () => {
  return (
    <>
        <h1>Sorry to see you go</h1>

        <Link href='/'>
          <button
            type='button'
            className='btn'
          >
            Home
          </button>
        </Link>

    </>
  )
}

export default cancel