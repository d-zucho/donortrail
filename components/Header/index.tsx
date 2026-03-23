'use client'

import Link from 'next/link'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { NAV_LINKS } from '@/constants/data'
import { buttonVariants } from '../ui/button'
import MobileNav from './MobileNav'
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

  
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { getUser, isLoading } = useKindeBrowserClient()
  const user = getUser()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header id='header' className={cn('py-5 sticky top-0 z-50', isScrolled && 'bg-background/70 border-b border-white/10 backdrop-blur-lg lg:px-5')}>
      <MaxWidthWrapper>
        <div className={'flex items-center justify-between'}>
          {/* logo */}
          <div className='flex items-center gap-5 shrink-0'>
            <Link href='/'>
            <span className='font-bold font-bebas-neue text-4xl text-primary'>Donor Trail</span>
            </Link>
             
          {/* nav links */}   
          <nav className='gap-2 items-center hidden md:flex'>
            {
              NAV_LINKS.map((link) => (
                <Link 
                href={link.href} 
                key={link.href}
                className={buttonVariants({ variant: "ghost", className: 'font-medium' })}
                >
                  {link.label}
                </Link>
              ))
            }
          </nav>
            </div>
          {/* Auth Actions */}
          <div className='hidden md:flex gap-2'>
            {
              isLoading ? null : (
                <div>
                  { user ? (
                    <>
                      <LogoutLink
                        className={buttonVariants({ variant: 'outline', className: 'px-5 py-5 min-w-24 font-medium relative group'})}
                      >
                        Log Out
                      </LogoutLink>
                    </>
                  ) : (
                    <div className='flex gap-2 items-center'>
                      <RegisterLink className={buttonVariants({ variant: 'default', className: 'px-5 py-5 min-w-24 font-medium relative group'})}>
                      <div className='shadow-[inset_-2px_-2px_4px_1px_rgba(0,0,0,0.4)] absolute inset-0 rounded-md group-hover:shadow-none transition-all duration-400' />
                <span>Sign Up Free</span>
              <div className='shadow-[inset_2px_2px_4px_1px_rgba(255,255,255,0.2)] absolute inset-0 rounded-md group-hover:shadow-none transition-all duration-400' />
                      </RegisterLink>
                      <LoginLink className={buttonVariants({ variant: 'outline', className: 'px-5 py-5 min-w-24 font-medium relative group'})}>
                        Login
                      </LoginLink>
                    </div>
                  )}
                </div>
              )
            }
           
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