import { section } from 'motion/react-client'
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'

const BentoGrid = () => {
  return (
    <section className='my-32 py-20'>
        <MaxWidthWrapper>


            <div className="grid grid-cols-5 grid-rows-6 gap-4">
                <div className="col-span-3 row-span-3 relative h-40 rounded-xl overflow-clip z-0">
                    <div className='absolute inset-0 bg-[url(/AboutEncryptionStandard.png)] bg-center bg-cover z-0 opacity-50'></div>
                    <div className="z-50! text-white">asd</div>
                    
                </div>
                <div className="col-span-2 row-span-3 col-start-4">2</div>
                <div className="col-span-2 row-span-3 row-start-4">3</div>
                <div className="col-span-3 row-span-3 col-start-3 row-start-4">4</div>
            </div>
        </MaxWidthWrapper>
    </section>
    
  )
}

export default BentoGrid