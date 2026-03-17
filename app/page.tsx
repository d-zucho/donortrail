import HomeStats from '@/components/HomeStats';
import Hero from '@/sections/Home/Hero';
import WhyUs from '@/sections/Home/WhyUs';
import HomeCTA from '@/sections/Home/HomeCTA';

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeStats />
      <WhyUs />
      <HomeCTA />
    </div>
  );
}
