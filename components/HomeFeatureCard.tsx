import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { TFeatureCard } from '@/lib/types'

const HomeFeatureCard = ({title, description, icon, src}: TFeatureCard) => {
  return (
    <Card className='bg-white/2 border border-white/10 max-sm:max-w-sm max-sm:mx-auto ring-0 py-7 px-5 relative'>
      <CardHeader>
        <div className='text-5xl mb-4'>{icon}</div>
        <CardTitle className='text-title-main'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image src={src} width={150} height={150} alt="Bell" className='absolute -top-10 -right-10 opacity-10' />
        <CardDescription className=''>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

export default HomeFeatureCard