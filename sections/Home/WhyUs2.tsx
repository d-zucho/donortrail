'use client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { WHY_US_2_CARDS } from '@/constants/data'
import { motion } from 'motion/react'


const WhyUs2 = () => {
  return (
    <section className=''>
        <MaxWidthWrapper>
        {/* heading  */}
        <div className='flex flex-col mb-16'>
          <span className='text-xs font-bold tracking-[0.15em] uppercase text-primary mb-3'>Why Donor Trail?</span>
          <div className='relative w-fit'>
          <h2 className='font-dm-serif-display text-title-main max-sm:max-w-[200px] text-h2-size 
          leading-snug'>Built for <span className='font-inter text-primary italic relative pr-8 pt-1'>
            
            real transparency
            <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute -left-2 -right-2 -top-8 bottom-0 translate-y-1"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="#FACC15"
              strokeWidth="3"
            />
          </svg>
            </span></h2>

        
          </div>


          {/* <div className='w-1/4 h-1 mt-2 bg-linear-to-r from-primary to-transparent rounded-full' /> */}

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20'>   
          {
            WHY_US_2_CARDS.map(({title, description, icon, icon2}) => {
                const Icon = icon
                const Icon2 = icon2
                
                
                
                return (
                    <Card key={title} className='px-7 pt-7 pb-8! bg-white/3 hover:bg-white/5 border-[0.5px]! border-white/2 group hover:border-primary/20 
                    transition-all duration-300 shadow-[5px_2px_20px_rgba(0,0,0,0.2)] hover:scale-102 hover:shadow-[5px_2px_10px_rgba(255,215,0,0.08)] relative max-md:max-w-sm max-sm:mx-auto'>
                        <CardHeader>
                            <div className='w-fit p-4 bg-primary/8 border border-primary/20 rounded-xl shadow-lg shadow-primary/10 mb-4
                            group-hover:scale-110 transition-all duration-500'>
                                <Icon className='text-primary' />
                            </div>
                            <CardTitle className='text-title-main text-xl font-semibold'>{title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className='text-base'>{description}</CardDescription>
                        </CardContent>
                        <CardFooter className='bg-transparent border-none'>
                            {
                                Icon2 ? (
                                    <Icon2 size={150} className='text-white/4 group-hover:text-white/10 absolute -right-8 -bottom-6 transition-all duration-300' />

                                ) : (
                                    <Icon size={150} className='text-white/4 group-hover:text-white/10 absolute -right-8 transition-all duration-300' />
                                )
                            }
                        </CardFooter>
                    </Card>
                )
            })
          }
          </div>
        </div>

       
      
      </MaxWidthWrapper>
    </section>
  )
}

export default WhyUs2