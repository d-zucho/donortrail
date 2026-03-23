import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';


const Hero = () => {
  return (
    <section>
      <MaxWidthWrapper className='relative'>
        <div className='bg-glow z-100 absolute top-0 left-0 right-0' />
        <div className='pt-20'>
          {/* badge */}
          <div className='flex items-center gap-2 mb-10 px-5 py-2 rounded-full bg-primary/10 w-fit mx-auto border border-primary/20'>
            <div className='relative w-1.5'>
              <div className='w-1 h-1 absolute top-1/2 left-1/2 -translate-x-1/2 bg-primary rounded-full shrink-0 animate-ping' />
              <div className='w-1.5 h-1.5 blur-sm absolute top-1/2 left-1/2 -translate-x-1/2 bg-primary rounded-full shrink-0 animate-ping' />
            </div>
            <span className='text-xs uppercase text-primary tracking-wider font-medium'>Live congressional data</span>
          </div>
          <h1 className='font-dm-serif-display text-hero-title-main text-hero-title-size text-center leading-tight'>Follow the money.
          <span className='font-inter text-primary italic block'>Hold power accountable.</span>
          </h1>
          <p className='mt-4 md:mt-5 text-center text-hero-description-size max-w-lg mx-auto leading-loose'>See exactly who funds your representatives, how they vote, and whether those two things are connected. Democracy requires transparency.</p>
        </div>

        <div className='mt-20 max-w-lg flex flex-col gap-2 mx-auto'>
            <Label htmlFor="search" className='sr-only'>Search</Label>
            <Input 
              id="search" 
              type="text" 
              placeholder="Search any congress menu, donar, or bill..." 
              className='hidden sm:block outline-none focus-visible:ring-0 border focus:border-primary/40!  bg-white/5 h-12 border-white/20'
              />
              <div className='flex flex-col sm:flex-row gap-4 w-fit mx-auto mt-4'>
                <Button className='min-w-52 relative border-b border-primary/50 group'>
                  <div className='shadow-[inset_-2px_-2px_4px_1px_rgba(0,0,0,0.4)] absolute inset-0 rounded-md group-hover:shadow-none transition-all duration-300' />
                  <span>Explore the trail</span>
                  <ArrowRight className='group-hover:animate-move-arrow transition-transform' />
                  <div className='shadow-[inset_2px_2px_4px_1px_rgba(255,255,255,0.2)] absolute inset-0 rounded-md group-hover:shadow-none transition-all duration-300' />
                </Button>
                <Button className='min-w-52' variant="outline">See how it works</Button>
              </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero