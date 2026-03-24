import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Spotlight } from '@/components/ui/Spotlight'
import Image from 'next/image'
import React from 'react'

const AboutHero = () => {
  return (
    <section className='my-32'>
        <MaxWidthWrapper>
            <div className='relative'>
                <div className='flex flex-col gap-5 items-center'>
                    <h1 className='font-dm-serif-display text-hero-title-main text-secondary-hero-title-size text-center leading-tight'>We believe accountability
                    <span className='font-inter text-primary italic block'>starts with information.</span>
                    </h1>
                    <p className='text-center max-w-xl'>Transparency is the ultimate deterrent to corruption. Donor Trail illuminates the complex paths from campaign contributions to legislative actions. </p>
                </div>
                {/* <div className='about-bg-glow rounded-full blur-2xl size-28! absolute top-[10vh] left-1/2 -translate-x-1/2 w-1/2 h-80 bg-linear-to-r from-primary/20 
  to-white/2 z-0 pointer-events-none animate-fade-in' /> */}
                <Spotlight 
                  className="-top-40 left-0 md:-top-20 md:left-60 opacity-1"
        fill="white"
                />
              
          </div>
        </MaxWidthWrapper>
    </section>
  )
}

export default AboutHero