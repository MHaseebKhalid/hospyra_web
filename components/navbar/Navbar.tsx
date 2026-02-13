'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const services = [
  { name: 'Culinary', href: '/services/culinary' },
  { name: 'Expansion', href: '/services/expansion' },
  { name: 'Design', href: '/services/design' },
  { name: 'Vendors & Supplies', href: '/services/vendors-supplies' },
  { name: 'Construction', href: '/services/construction' },
  { name: 'Entertainment', href: '/services/entertainment' },
]

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Growth', href: '/growth' },
  { name: 'Partner', href: '/partner' },
  { name: 'Investors', href: '/investors' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const Navbar = () => {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)

  const isServicesActive = pathname === '/services' || services.some((s) => pathname.startsWith(s.href))

  useEffect(() => {
    if (isServicesActive) setIsServicesOpen(true)
  }, [pathname])

  const closeSidebar = () => setIsSidebarOpen(false)

  const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link href={href} className={`transition-colors duration-200 text-sm font-medium ${isActive(href) ? 'text-[#FF6B35]' : 'text-white hover:text-[#FF6B35]'}`}>
      {children}
    </Link>
  )

  const SidebarLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link href={href} onClick={closeSidebar} className={`block py-3 px-4 rounded-lg transition-colors duration-200 text-sm font-medium ${isActive(href) ? 'text-[#FF6B35] bg-orange-50' : 'text-black hover:bg-gray-100'}`}>
      {children}
    </Link>
  )

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#27272A] backdrop-blur-sm">
        <div className="px-[4%] flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-2xl md:text-3xl font-bold text-[#FF6B35] font-antonio">
            HOSPYRA
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.name}
              </NavLink>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center gap-1 text-sm font-medium outline-none transition-colors ${isServicesActive
                  ? 'text-[#FF6B35]'
                  : 'text-white hover:text-[#FF6B35]'
                  }`}
              >
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-[#2a2a2a] border-gray-700 min-w-50 mt-2">
                <DropdownMenuItem asChild>
                  <Link
                    href="/services"
                    className={`cursor-pointer hover:bg-[#3a3a3a] px-2 py-1 ${pathname === '/services'
                      ? 'text-[#FF6B35] bg-[#3a3a3a]'
                      : 'text-white hover:text-[#FF6B35]'
                      }`}
                  >
                    All Services
                  </Link>
                </DropdownMenuItem>

                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link
                      href={service.href}
                      className={`cursor-pointer hover:bg-[#3a3a3a] px-2 py-1 ${pathname === service.href
                        ? 'text-[#FF6B35] bg-[#3a3a3a]'
                        : 'text-white hover:text-[#FF6B35]'
                        }`}
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(2).map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden lg:flex items-center gap-2 bg-[#FF6B35] hover:bg-[#FF8555] text-white px-6 py-3 rounded-full text-sm transition"
          >
            Book a Strategy Call
            <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            onClick={() => setIsSidebarOpen((p) => !p)}
            className="lg:hidden text-white hover:text-[#FF6B35] p-2"
          >
            <Menu />
          </button>
        </div>
      </nav>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      <aside className={`fixed top-0 left-0 h-screen w-80 bg-white z-50 transform transition-transform lg:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-screen flex flex-col border-l-4 border-[#2a2a2a]">
          <div className="p-6 border-b flex justify-between items-center">
            <Link
              href="/"
              onClick={closeSidebar}
              className="text-2xl font-bold text-[#FF6B35] font-antonio"
            >
              HOSPYRA
            </Link>
            <button onClick={closeSidebar}>
              <X />
            </button>
          </div>

          <nav className="min-h-0 overflow-y-auto py-6 px-6 space-y-1">
            {navLinks.slice(0, 2).map((link) => (
              <SidebarLink key={link.href} href={link.href}>
                {link.name}
              </SidebarLink>
            ))}

            <div className={`py-3 px-4 rounded-lg ${isServicesActive && 'bg-orange-50'}`}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex justify-between w-full text-sm font-medium ${isServicesActive
                  ? 'text-[#FF6B35]'
                  : 'text-black hover:text-[#FF6B35]'
                  }`}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-96 mt-2' : 'max-h-0'}`}>
                <Link href="/services" onClick={closeSidebar} className="block py-2 pl-4 text-sm hover:bg-gray-100">
                  All Services
                </Link>

                {services.map((service) => (
                  <Link key={service.href} href={service.href} onClick={closeSidebar} className="block py-2 pl-4 text-sm hover:bg-gray-100">
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <SidebarLink key={link.href} href={link.href}>
                {link.name}
              </SidebarLink>
            ))}
          </nav>

          <div className="p-6 border-t">
            <Link
              href="/contact"
              onClick={closeSidebar}
              className="w-full flex justify-center items-center gap-2 bg-[#FF6B35] hover:bg-[#FF8555] text-white px-6 py-3 rounded-full text-sm"
            >
              Book a Strategy Call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Navbar;