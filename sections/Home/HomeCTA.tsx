import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const HomeCTA = () => {
  return (
    <section className='my-32'>
      <MaxWidthWrapper>
        <div className='bg-primary/5 border border-primary/10 p-12 rounded-xl flex flex-col'>
          <h2 className='text-center text-title-main text-h2-size font-dm-serif-display mb-4'>Decomcracy works better when<span className='text-primary font-inter italic'> everyone's watching.</span></h2>
          <p className='text-center mb-8 max-w-md mx-auto'>Free to use. No account required to browse. Sign up for alerts and personalized tracking.</p>
          <Button className='w-fit mx-auto px-4 group'>Start Exploring for Free <ArrowRight className='group-hover:animate-[arrow_1s_infinite]' /></Button>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default HomeCTA