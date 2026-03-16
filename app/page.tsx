import HomeStats from '@/components/HomeStats';
import Hero from '@/sections/Home/Hero';
import WhyUs from '@/sections/Home/WhyUs';

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeStats />
      <WhyUs />
    </div>
  );
}
