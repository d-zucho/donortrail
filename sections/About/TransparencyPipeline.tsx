import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { PIPELINE_DATA } from "@/constants/data"
import { IconAnalyze, IconFileAnalytics, IconReportAnalytics, IconSpeakerphone } from "@tabler/icons-react"
import { Database } from "lucide-react"


const TransparencyPipeline = () => {
  return (
    <section className='my-32  py-32'>
        <MaxWidthWrapper>
            <h2 className="text-h2-size max-md:text-center font-dm-serif-display text-title-main text-left">The Transparency <span className="text-primary">Pipeline</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative mt-14 max-w-[990px] mx-auto">
                <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-white/10 pipeline-connector" />
                <div className="pipeline-dot top-[46px] hidden md:block" />
                <div className="pipeline-dot top-[46px] hidden md:block" />

                {
                    PIPELINE_DATA.map((data) => {
                        const Icon = data.icon
                        return (
                            <div key={data.number} className="relative z-10 text-center group animate-on-scroll visible">
                                <div className="w-24 h-24 glass-card border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 
                                group-hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] transition-shadow bg-[#111]">
                                    <span className="text-4xl">
                                        <Icon size={32} className="text-primary" />
                                    </span>
                                </div>
                                <div className="absolute font-dm-serif-display -top-8 left-1/2 -translate-x-1/2 text-5xl font-headline italic opacity-10">
                                    {data.number}
                                </div>
                                <div>
                                    <h4 className="text-xl text-title-main font-dm-serif-display font-semibold mb-4">{data.title}</h4>
                                    <p className="text-sm max-md:w-xs w-[80%] mx-auto">{data.description}</p>
                                </div>
                                
                            </div>
                        )
                    })
                }
                
                
            </div>
        </MaxWidthWrapper>
    </section>
  )
}

export default TransparencyPipeline