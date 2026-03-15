'use client'
import CountUp from 'react-countup'
import { HOME_DATA_POINTS } from '@/constants/data'
import MaxWidthWrapper from './MaxWidthWrapper'

const HomeStats = () => {
  return (
    <div className='my-32'>
      <MaxWidthWrapper>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-12 justify-items-center items-center justify-center border-b-white/5 border-b border-t border-t-white/5 py-12'>
          {
            HOME_DATA_POINTS.map(({stat, description}) => (
              <div key={stat} className='flex flex-col'>
                <CountUp
                  end={stat}
                  duration={2}
                  className='mx-auto text-stat-value text-primary font-bold'
                  />
                <p className='mx-auto text-center text-sm'>{description}</p>
              </div>
            ))
          }
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default HomeStats