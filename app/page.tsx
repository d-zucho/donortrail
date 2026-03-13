import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <MaxWidthWrapper className='relative'>
        <div className='bg-glow' />
        <div>hello</div>
      </MaxWidthWrapper>
    </div>
  );
}
