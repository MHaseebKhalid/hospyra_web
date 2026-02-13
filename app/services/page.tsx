import type { Metadata } from "next";
import Link from 'next/link'
import ServicesBanner from '@/components/banners/ServicesBanner'

export const metadata: Metadata = {
  title: "Services - Hospyra",
  description: "Comprehensive solutions for your restaurant business needs. From culinary consulting to construction, design, expansion, vendors & supplies, and entertainment services.",
  keywords: "restaurant services, culinary services, restaurant design, restaurant construction, restaurant expansion, hospitality services",
};

const ServicesPage = () => {
  const services = [
    { name: 'Culinary', href: '/services/culinary', description: 'Expert culinary consulting and menu development' },
    { name: 'Expansion', href: '/services/expansion', description: 'Strategic planning for restaurant expansion' },
    { name: 'Design', href: '/services/design', description: 'Interior and exterior design solutions' },
    { name: 'Vendors & Supplies', href: '/services/vendors-supplies', description: 'Quality vendors and supply chain management' },
    { name: 'Construction', href: '/services/construction', description: 'Complete construction and renovation services' },
    { name: 'Entertainment', href: '/services/entertainment', description: 'Entertainment solutions for your restaurant' },
  ]

  return (
    <>
      <ServicesBanner />
      <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-4">Services</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Comprehensive solutions for your restaurant business needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="block p-6 border border-border rounded-lg hover:border-[#FF6B35] transition-colors duration-200"
            >
              <h2 className="text-2xl font-semibold mb-2 text-[#FF6B35]">
                {service.name}
              </h2>
              <p className="text-muted-foreground">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
      </div>
    </>
  )
}

export default ServicesPage

