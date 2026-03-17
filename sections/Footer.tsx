import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'

const Footer = () => {

  
  return (
    <footer className='py-8 border-t border-t-white/5'>
      <MaxWidthWrapper>
        <div className='flex sm:flex-row flex-col gap-3 items-start justify-between'>
          {/* logo */}
          <div className='flex items-center gap-5 shrink-0'>
            <Link href='/'>
            <span className='font-bold font-bebas-neue text-4xl text-primary'>Donor Trail</span>
            </Link>
            </div>
            
          <p className='text-xs max-w-xs text-left sm:text-right'>Data sourced from FEC, Congress.gov, & ProPublica. Non-partisan. Open source.</p>
          
        </div>
          {/* button */}
          
          <div className="flex flex-row sm:flex-col gap-6 text-sm mt-4">
            
            {/* @TODO: add links */}
            <span className='hover:text-primary transition-all duration-300 cursor-pointer'>Privacy</span><span className='hover:text-primary transition-all duration-300 cursor-pointer'>About</span><span className='hover:text-primary transition-all duration-300 cursor-pointer'>API</span>
          </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer