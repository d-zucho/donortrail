'use client'

import Link from 'next/link'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { NAV_LINKS } from '@/constants/data'
import { buttonVariants } from '../ui/button'
import MobileNav from './MobileNav'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'

  
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const path = usePathname()
  
  const { user, isSignedIn } = useUser()
  const lastAuthStateLoggedRef = useRef<string | null>(null)

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

  useEffect(() => {
    // #region agent log
    try {
      const authBucket = isSignedIn ? 'signed-in' : 'signed-out'
      if (lastAuthStateLoggedRef.current === authBucket) return
      lastAuthStateLoggedRef.current = authBucket
      fetch('http://127.0.0.1:7302/ingest/e8861fcc-1294-42d7-a788-e73e7f09fd62', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Debug-Session-Id': '5159fe',
        },
        body: JSON.stringify({
          sessionId: '5159fe',
          runId: 'pre-debug',
          hypothesisId: 'H3_clerk_user_state',
          location: 'components/Header/index.tsx:useUser',
          message: 'Clerk useUser state bucket',
          data: { isSignedIn: Boolean(isSignedIn), hasUserObj: Boolean(user) },
          timestamp: Date.now(),
        }),
      }).catch(() => {})
    } catch {
      // no-op
    }
    // #endregion
  }, [isSignedIn, user])

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
                className={buttonVariants({ variant: "ghost", className: `font-medium ${path === link.href ? 'text-primary bg-primary/5' : ''}` })}
                >
                  {link.label}
                </Link>
              ))
            }
          </nav>
            </div>
          {/* Auth Actions */}
          <div className='hidden md:flex gap-2'>
            
            
                <div>
                  { isSignedIn ? (
                    <>
                    {/* <Show when="signed-in"> */}
                      <UserButton />
                        {/* </Show> */}
                    </>
                  ) : (
                    <div className='flex gap-2 items-center'>
                      {/* <Show when={'signed-out'}> */}
                       <SignUpButton>
                         <Link href={'/sign-up'} className={buttonVariants({ variant: 'default', className: 'px-5 py-5 min-w-24 font-medium relative group'})}>
                          <div className='shadow-[inset_-2px_-2px_4px_1px_rgba(0,0,0,0.4)] absolute inset-0 rounded-md group-hover:shadow-none transition-all duration-400' />
                          <span>Sign Up Free</span>
                          <div className='shadow-[inset_2px_2px_4px_1px_rgba(255,255,255,0.2)] absolute inset-0 rounded-md group-hover:shadow-none transition-all duration-400' />
                         </Link>
                      </SignUpButton>
                    <SignInButton>

                        <Link href={'/sign-in'} className={buttonVariants({ variant: 'outline', className: 'px-5 py-5 min-w-24 font-medium relative group'})}>
                          Login
                        </Link>
                      </SignInButton>
                      {/* </Show> */}
                    </div>
                  )}
                </div>
              
            
           
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