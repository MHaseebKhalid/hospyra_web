'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

const Footer = () => {
  const services = [
    { name: 'Growth', href: '/growth' },
    { name: 'Services', href: '/services' },
    { name: 'Menu & Culinary', href: '/services/culinary' },
    { name: 'Brand & Design', href: '/services/design' },
    { name: 'Vendors & Supplies', href: '/services/vendors-supplies' },
    { name: 'Build & Construction', href: '/services/construction' },
    { name: 'Entertainment', href: '/services/entertainment' },
  ]

  return (
    <footer className="bg-[#27272A] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-white font-antonio tracking-tight mb-3">
                HOSPYRA
              </h2>
              <p className="text-white text-md leading-relaxed">
                Hospitality Growth & Execution Partner
              </p>
            </div>
            
            <div className="text-white text-md">
              <p>Concept • Build • Launch • Grow • Scale</p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:Hello@Hospyra.Com"
                className="flex items-center gap-2 text-white hover:text-[#FF6B35] transition-colors duration-200 text-md"
              >
                <Mail className="h-4 w-4" />
                <span>Hello@Hospyra.Com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-white hover:text-[#FF6B35] transition-colors duration-200 text-md"
              >
                <Phone className="h-4 w-4" />
                <span>+1 (234) 567-890</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold font-antonio uppercase mb-6 tracking-wider">
              SERVICES
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                {services.slice(0, 4).map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block text-white hover:text-[#FF6B35] transition-colors duration-200 text-md"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-3">
                {services.slice(4).map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block text-white hover:text-[#FF6B35] transition-colors duration-200 text-md"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold font-antonio uppercase mb-6 tracking-wider">
              COMPANY
            </h3>
            <div className="space-y-3">
              <Link
                href="/about"
                className="block text-white hover:text-[#FF6B35] transition-colors duration-200 text-md"
              >
                About Hospyra
              </Link>
              <Link
                href="/contact"
                className="block text-white hover:text-[#FF6B35] transition-colors duration-200 text-md"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-white/70 text-md">
            © 2025 Hospyra | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
