import BentoGrid from '@/components/BentoGrid'
import AboutCTA from '@/sections/About/AboutCTA'
import AboutFindTruth from '@/sections/About/AboutFindTruth'
import AboutHero from '@/sections/About/AboutHero'
import OurProcess from '@/sections/About/OurProcess'
import TransparencyPipeline from '@/sections/About/TransparencyPipeline'

const AboutPage = () => {
  return (
    <div className=''>
      <AboutHero />
      <TransparencyPipeline />
      <OurProcess />
      <AboutCTA />
      <AboutFindTruth />
    </div>
  )
}

export default AboutPage
