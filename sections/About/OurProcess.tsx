import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { OUR_PROCESS_DATA } from '@/constants/data'
import React from 'react'

const OurProcess = () => {
  return (
    <section className='my-32 py-32 bg-white/3'>
      <MaxWidthWrapper>
        <div>
          <div className='flex flex-col items-center sm:items-start'>
            <h2 className='section-label'>Our Process</h2>
            <h3 className='font-dm-serif-display text-h2-size text-hero-title-main'>
              The Sience of{' '}
              <span className='italic font-inter font-medium text-primary'>
                Transparency
              </span>
            </h3>
            <p className='max-w-xl mt-3 text-lg leading-relaxed text-center sm:text-left'>
              Donor Trail uses a rigorous, multi-stage process to ensure data
              integrity. We don't just display numbers; we provide verified
              intelligence through a combination of automated processing and
              human oversight.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20'>
            {OUR_PROCESS_DATA.map((data, index) => {
              const Icon = data.icon
              return (
                <div
                  key={index}
                  className='max-w-sm max-md:mx-auto flex flex-col items-center sm:items-start'
                >
                  <div className='flex items-center gap-5 mb-5'>
                    <Icon className='text-primary p-2 size-12 border-2 border-white/10 rounded-lg shadow-lg shadow-black/60' />
                    <h4 className='text-2xl font-dm-serif-display text-title-main'>
                      {data.title}
                    </h4>
                  </div>
                  <p className='leading-relaxed text-center sm:text-left'>
                    {data.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default OurProcess
