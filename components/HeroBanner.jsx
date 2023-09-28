import React from 'react';
import Link from 'next/link';
    {/* BEFORE LINKING SANITY MAKE ONE THAT HAS FREE BOOST PLAN */}

const HeroBanner = () => {
  return (


    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>small text</p>
        <h3>MID TEXT</h3>
        <img src="" alt="painting" className='hero-banner-image' />

        <div>
          <Link href='/product/ID'>
            <button type='button'>BUTTON TEXT</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner