'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

type MenuItem = {
  label: string
  href?: string
  children?: {
    label: string
    href: string
  }[]
}

const menuItems: MenuItem[] = [
  {
    label: 'Weight Loss',
    children: [
      {
        label: 'Semaglutide',
        href: '/services/semaglutide/',
      },
      {
        label: 'Tirzepatide',
        href: '/services/tirzepatide/',
      },
    ],
  },
  {
    label: 'Hormone Therapy',
    children: [
      {
        label: 'Hormone Therapy for Men',
        href: '/services/hormone-therapy-for-men/',
      },
      {
        label: 'Hormone Therapy for Women',
        href: '/hormone-optimization-for-women/',
      },
      {
        label: 'Bio-identical Hormone Replacement Therapy',
        href: '/services/bioidentical-hormone-therapy/',
      },
      {
        label: 'Testosterone Therapy',
        href: '/services/testosterone-replacement-therapy-trt/',
      },
      {
        label: 'Menopause Treatment',
        href: '/services/menopause-treatment/',
      },
      {
        label: 'Andropause Treatment',
        href: '/services/andropause-treatment/',
      },
    ],
  },
  {
    label: 'Wellness',
    children: [
      {
        label: 'Peptides',
        href: '/services/peptides/',
      },
      {
        label: 'Vitamin Injections',
        href: '/services/vitamin-injections/',
      },
      {
        label: 'ED Treatment',
        href: '/services/erectile-dysfunction/',
      },
    ],
  },
  {
    label: 'About',
    children: [
      {
        label: 'Our Team',
        href: '/meet-our-team/',
      },
      {
        label: 'FAQ',
        href: '/f-a-q/',
      },
      {
        label: 'Blog',
        href: '/blog/',
      },
      {
        label: 'In The News',
        href: '/in-the-news/',
      },
    ],
  },
]

function ChevronDown() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="transition-transform duration-200"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

   const [mobileOpen, setMobileOpen] = useState(false)
   const [mobileMenu, setMobileMenu] = useState<string | null>(null)

   return (
     <header className="top-0 z-50 bg-white">
       {/* Top utility bar */}
       <div className="border-b border-slate-100 bg-white">
         <div className="mx-auto flex max-w-[1440px] items-center justify-end px-5 py-2.5 sm:px-8 lg:px-12">
           <div className="flex items-center gap-5 text-[13px] text-slate-600">
             <a
               href="tel:5613590913"
               className="flex items-center gap-2 transition hover:text-[#2a9d8f]"
             >
               <PhoneIcon />
               <span>561-359-0913</span>
             </a>

             <a
               href="/contact-us/"
               className="rounded-full bg-[#173f3b] px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#245b55]"
             >
               Schedule Now
             </a>
           </div>
         </div>
       </div>

       {/* Main navigation */}
       <div className="border-b border-slate-100 bg-white">
         <div className="mx-auto flex h-[86px] max-w-[1440px] items-center px-5 sm:px-8 lg:px-12">
           {/* Logo */}
           <a
             href="/"
             className="flex min-w-[185px] items-center"
             aria-label="TestoCore Hormonal Wellness"
           >
             <div className="leading-none">
               <div className="text-[25px] font-bold tracking-[-0.05em] text-[#173f3b]">
                 Testo<span className="text-[#2a9d8f]">Core</span>
               </div>

               <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.23em] text-slate-500">
                 Hormonal Wellness
               </div>
             </div>
           </a>

           {/* Desktop navigation */}
           <nav className="ml-auto hidden items-center lg:flex">
             {menuItems.map((item) => (
               <div key={item.label} className="group relative">
                 <button
                   type="button"
                   className="flex items-center gap-1.5 px-5 py-8 text-[14px] font-medium text-slate-700 transition hover:text-[#2a9d8f]"
                 >
                   {item.label}
                   {item.children && <ChevronDown />}
                 </button>

                 {item.children && (
                   <div className="invisible absolute left-1/2 top-full w-[280px] -translate-x-1/2 translate-y-2 rounded-xl border border-slate-100 bg-white p-3 opacity-0 shadow-[0_18px_60px_rgba(15,23,42,0.12)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                     {item.children.map((child) => (
                       <a
                         key={child.label}
                         href={child.href}
                         className="block rounded-lg px-4 py-3 text-[14px] text-slate-600 transition hover:bg-[#edf8f6] hover:text-[#227f76]"
                       >
                         {child.label}
                       </a>
                     ))}
                   </div>
                 )}
               </div>
             ))}

             <a
               href="/contact-us/"
               className="ml-4 rounded-full bg-[#2a9d8f] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#227f76]"
             >
               Book Consultation
             </a>
           </nav>

           {/* Mobile button */}
           <button
             type="button"
             aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
             onClick={() => setMobileOpen((value) => !value)}
             className="ml-auto flex h-11 w-11 items-center justify-center rounded-full text-slate-800 transition hover:bg-slate-100 lg:hidden"
           >
             {mobileOpen ? <CloseIcon /> : <MenuIcon />}
           </button>
         </div>

         {/* Mobile navigation */}
         <div
           className={`overflow-hidden border-t border-slate-100 transition-all duration-300 lg:hidden ${
             mobileOpen ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'
           }`}
         >
           <nav className="px-5 py-4 sm:px-8">
             {menuItems.map((item) => {
               const opened = mobileMenu === item.label

               return (
                 <div key={item.label} className="border-b border-slate-100">
                   <button
                     type="button"
                     onClick={() => setMobileMenu(opened ? null : item.label)}
                     className="flex w-full items-center justify-between py-4 text-left text-[15px] font-medium text-slate-800"
                   >
                     {item.label}

                     {item.children && (
                       <span
                         className={`transition-transform duration-200 ${
                           opened ? 'rotate-180' : ''
                         }`}
                       >
                         <ChevronDown />
                       </span>
                     )}
                   </button>

                   {item.children && (
                     <div
                       className={`grid overflow-hidden transition-all duration-200 ${
                         opened ? 'grid-rows-[1fr] pb-3' : 'grid-rows-[0fr]'
                       }`}
                     >
                       <div className="min-h-0 overflow-hidden pl-3">
                         {item.children.map((child) => (
                           <a
                             key={child.label}
                             href={child.href}
                             className="block py-2.5 text-[14px] text-slate-500 hover:text-[#2a9d8f]"
                           >
                             {child.label}
                           </a>
                         ))}
                       </div>
                     </div>
                   )}
                 </div>
               )
             })}

             <a
               href="/contact-us/"
               className="mt-5 flex items-center justify-center rounded-full bg-[#2a9d8f] px-6 py-3.5 text-sm font-semibold text-white"
             >
               Book Consultation
             </a>

             <a
               href="tel:5613590913"
               className="mt-3 flex items-center justify-center gap-2 py-3 text-sm text-slate-600"
             >
               <PhoneIcon />
               561-359-0913
             </a>
           </nav>
         </div>
       </div>
     </header>
   )
}
