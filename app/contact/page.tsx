import type { Metadata } from "next";
import ContactBanner from '@/components/banners/ContactBanner'

export const metadata: Metadata = {
  title: "Contact - Hospyra",
  description: "Get in touch with Hospyra to discuss your restaurant growth, media, and execution needs. Book a strategy call with our team of experts.",
  keywords: "contact Hospyra, restaurant consulting, book strategy call, restaurant partner contact",
};

const ContactPage = () => {
  return (
    <>
      <ContactBanner />
    </>
  )
}

export default ContactPage

