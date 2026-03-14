'use client'
import Link from 'next/link'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { NAV_LINKS } from '@/constants/data'
import { buttonVariants } from '../ui/button'
import MobileNav from './MobileNav'
import { useEffect } from 'react'

const Header = () => {

  const handleScroll = () => {
    const header = document.getElementById('header')
    if (header) {
      if (window.scrollY > 0) {
        header.classList.add('bg-background/50')
        header.classList.add('backdrop-blur-sm')
      } else {
        header.classList.remove('bg-background/50')
        header.classList.remove('backdrop-blur-sm')
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header id='header' className='py-5 sticky top-0 z-50'>
      <MaxWidthWrapper>
        <div className='flex items-center justify-between'>
          {/* logo */}
          <div className='flex items-center gap-5 shrink-0'>
            <Link href='/'>
            <span className='font-bold font-bebas-neue text-4xl text-primary'>Donor Trail</span>
            </Link>
            
          {/* nav links */}
          <nav className='flex gap-2 items-center hidden md:flex'>
            {
              NAV_LINKS.map((link) => (
                <Link 
                href={link.href} 
                key={link.href}
                className={buttonVariants({ variant: "ghost", className: 'px-2 py-5 min-w-24 font-medium' })}
                >
                  {link.label}
                </Link>
              ))
            }
          </nav>
            </div>
          {/* button */}
          <div className='hidden md:flex gap-2'>
            <Link href='/login' className={buttonVariants({ variant: "default", className: 'px-5 py-5 min-w-24 font-medium relative group' })}>
            <div className='shadow-[inset_-2px_-2px_4px_1px_rgba(0,0,0,0.4)] absolute inset-0 rounded-md group-hover:shadow-none transition-all duration-400' />
            Sign Up Free
            <div className='shadow-[inset_2px_2px_4px_1px_rgba(255,255,255,0.2)] absolute inset-0 rounded-md group-hover:shadow-none transition-all duration-400' />
            </Link>
            
          </div>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default Header