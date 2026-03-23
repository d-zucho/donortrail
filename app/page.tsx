import HomeStats from '@/components/HomeStats';
import Hero from '@/sections/Home/Hero';
import WhyUs from '@/sections/Home/WhyUs';
import HomeCTA from '@/sections/Home/HomeCTA';
import WhyUs2 from '@/sections/Home/WhyUs2';

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeStats />
      <WhyUs2 />
      <WhyUs />
      <HomeCTA />
    </div>
  );
}
