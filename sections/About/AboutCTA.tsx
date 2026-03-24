import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const AboutCTA = () => {
  return (
    <section className='my-20'>
        <MaxWidthWrapper>
        <div className='px-10 py-8 bg-surface-container/50 rounded-2xl border-2 border-white/3 max-w-6xl mx-auto'>
            <span className='section-label'>Take action</span>
            <div className='flex flex-col md:flex-row items-center justify-between gap-10'>
                <div className='flex flex-col max-w-2xl'>
                    <h3 className='text-4xl text-title-main font-dm-serif-display mt-3 mb-4'>Ready to see the <span className='italic'>full picture</span></h3>
                    <p className='leading-relaxed text-lg max-w-xl'>Join 50,000+ citizens monitoring the financial heart of our democracy. Use our professional tools to track any representative.</p>
                </div>
                <div>
                    <Button className='px-5 py-7 lg:px-12 lg:text-base lg:font-medium lg:py-8 hover:outline-transparent font-bold flex items-center hover:scale-103 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20'>
                    <div className='shadow-[inset_-2px_-2px_4px_1px_rgba(0,0,0,0.4)] absolute inset-0 rounded-md group-hover:shadow-none transition-all duration-400' />
                        Explore the Data
                        <ArrowRight className='w-5! h-5!' />    
                        <div className='shadow-[inset_2px_2px_4px_1px_rgba(255,255,255,0.2)] absolute inset-0 rounded-md group-hover:shadow-none transition-all duration-400' />  
                    </Button>
                </div>
            </div>
        </div>
        </MaxWidthWrapper>
    </section>
  )
}

export default AboutCTA