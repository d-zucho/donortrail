import HomeFeatureCard from '@/components/HomeFeatureCard'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { FEATURED_CARDS } from '@/constants/data'
import React from 'react'

const WhyUs = () => {
  return (
    <section className='my-32'>
      <MaxWidthWrapper>
        {/* heading  */}
        <div className='flex flex-col items-center mb-16'>
          <span className='text-xs font-bold tracking-[0.15em] uppercase text-primary mb-3'>Why Donor Trail?</span>
          <h2 className='font-dm-serif-display text-title-main text-h2-size text-center leading-snug'>Built for <span className='font-inter italic'>real transparency</span></h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {
            FEATURED_CARDS.map((card) => (
              <HomeFeatureCard key={card.title} {...card} />
            ))
          }
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default WhyUs