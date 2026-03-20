'use client'

import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

const Footer = () => {
  const servicesCol1 = [
    { name: 'Overview', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Platform', href: '/growth' },
    { name: 'Business', href: '/about' },
  ]

  const servicesCol2 = [
    { name: 'Supply Partners', href: '/services/vendors-supplies' },
    { name: 'Investors', href: '/investors' },
    { name: 'Ambassadors', href: '/partner' },
    { name: 'Got Questions', href: '/contact' },
  ]

  const companyLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms Of Use', href: '/terms' },
  ]

  return (
    <footer className="bg-[#1E1E1F] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Left column - Brand */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold font-effra text-white">
              Hosperra
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed font-effra">
              Designed By Hospitality Operators, For Hospitality Operators.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:Hello@Hosperra.Com"
                className="flex items-center gap-2 text-white/90 hover:text-[#FF6B35] transition-colors duration-200 text-sm md:text-base font-effra"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>Hello@Hosperra.Com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-white/90 hover:text-[#FF6B35] transition-colors duration-200 text-sm md:text-base font-effra"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span>+1 (234) 567-890</span>
              </a>
            </div>
          </div>

          {/* Services columns */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold font-effra mb-6 tracking-wider uppercase">
              Services
            </h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                {servicesCol1.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-white/90 hover:text-[#FF6B35] transition-colors duration-200 text-sm md:text-base font-effra"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-3">
                {servicesCol2.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-white/90 hover:text-[#FF6B35] transition-colors duration-200 text-sm md:text-base font-effra"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-xl font-bold font-effra mb-6 tracking-wider uppercase">
              Company
            </h3>
            <div className="space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-white/90 hover:text-[#FF6B35] transition-colors duration-200 text-sm md:text-base font-effra"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-white/70 text-sm font-effra">
            © 2025 Hosperra | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
