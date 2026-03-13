'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { IconMenu2Filled, IconX, IconArrowRight } from '@tabler/icons-react'
import { NAV_LINKS } from '@/constants/data'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'

const MobileNav = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Open navigation menu"
          className="cursor-pointer p-1.5 rounded-lg text-foreground/80 hover:text-foreground hover:bg-white/5 ease-in-out transition-all duration-400"
        >
          <IconMenu2Filled size={26} />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className={cn(
          'w-[300px] sm:w-[340px] p-0 border-l border-white/10',
          'bg-[oklch(0.11_0_0)] flex flex-col'
        )}
      >
        {/* Accessibility */}
        <SheetTitle className="sr-only">Donor Trail Navigation</SheetTitle>
        <SheetDescription className="sr-only">
          Follow the money. Hold power accountable.
        </SheetDescription>

        {/* Header */}
        <SheetHeader className="px-6 pt-6 pb-5 border-b border-white/8 flex-row items-center justify-between space-y-0">
          <div>
            <span className="font-bebas-neue text-3xl text-primary leading-none tracking-wide">
              Donor Trail
            </span>
            <p className="text-xs text-foreground/40 mt-0.5 font-medium tracking-wider uppercase">
              Follow the money
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
            className="p-1.5 rounded-lg text-foreground/50 hover:text-foreground hover:bg-white/8 transition-all duration-400"
          >
            <IconX size={20} />
          </button>
        </SheetHeader>

        {/* Nav links */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground/60 hover:text-foreground hover:bg-white/5'
                )}
              >
                <span>{link.label}</span>
                <IconArrowRight
                  size={15}
                  className={cn(
                    'transition-all duration-200',
                    isActive
                      ? 'text-primary opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-1 group-hover:opacity-50 group-hover:translate-x-0'
                  )}
                />
              </Link>
            )
          })}
        </nav>

        {/* Footer CTA */}
        <div className="px-4 pb-8 pt-4 border-t border-white/8 space-y-3">
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className={cn(
              buttonVariants({ variant: 'default' }),
              'w-full py-5 font-semibold text-sm justify-center'
            )}
          >
            Sign Up Free
          </Link>
          <p className="text-center text-xs text-foreground/30">
            No credit card required
          </p>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav