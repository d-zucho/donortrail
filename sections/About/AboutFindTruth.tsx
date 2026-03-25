import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Button } from "@/components/ui/button"

const AboutFindTruth = () => {
  return (
    <section className="my-40 relative overflow-visible z-0">
        <MaxWidthWrapper className="overflow-visible">
            <div className="absolute w-160 h-160 -z-10 left-1/2 -translate-x-1/2 -top-40 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.06),transparent_60%)]" />
                <div className="flex flex-col items-center max-w-4xl mx-auto">
                    <h2 className="text-title-main font-dm-serif-display text-center text-hero-title-size">
                        Follow the <span className="text-primary">money</span>,<br /> find the truth.</h2>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-10">
                        <Button className="md:text-xl md:px-12 md:py-8 group transition-all duration-300">
                            <div className='shadow-[inset_-2px_-2px_4px_1px_rgba(0,0,0,0.4)] absolute inset-0 rounded-md group-hover:shadow-none transition-all duration-400' />
                            Start Your Search
                            <div className='shadow-[inset_2px_2px_4px_1px_rgba(255,255,255,0.2)] absolute inset-0 rounded-md group-hover:shadow-none transition-all duration-400' />  
                        </Button>
                        <Button variant={'outline'} className="md:text-xl md:px-12 md:py-8">Our Methodology</Button>
                    </div>
                </div>
            {/* </div> */}
        </MaxWidthWrapper>
    </section>
  )
}

export default AboutFindTruth