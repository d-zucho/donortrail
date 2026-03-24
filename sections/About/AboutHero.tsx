import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import React from 'react'

const AboutHero = () => {
  return (
    <section className='my-32'>
        <MaxWidthWrapper>
            <div>
                <div>
                    <h1 className='font-dm-serif-display text-hero-title-main text-secondary-hero-title-size text-center leading-tight'>We believbe accountability
                    <span className='font-inter text-primary italic block'>starts with information.</span>
                    </h1>
                </div>
              
          </div>
        </MaxWidthWrapper>
    </section>
  )
}

export default AboutHero