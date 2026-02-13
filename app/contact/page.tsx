import type { Metadata } from "next";
import ContactBanner from '@/components/banners/ContactBanner'
import ContactActionCard from '@/components/cards/ContactActionCard';
import ProjectInquiryForm from '@/components/forms/ProjectInquiryForm';
import { CalendarDays, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: "Contact - Hospyra",
  description: "Get in touch with Hospyra to discuss your restaurant growth, media, and execution needs. Book a strategy call with our team of experts.",
  keywords: "contact Hospyra, restaurant consulting, book strategy call, restaurant partner contact",
};

const ContactPage = () => {

  return (
    <>
      <ContactBanner />
      <div className="px-[4%] bg-[#fffdfb] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          <ContactActionCard
            icon={<CalendarDays className="w-8 h-8" />}
            title="BOOK A STRATEGY CALL"
            description="Schedule A Free 30-Minute Consultation To Discuss Your Specific Needs And Opportunities."
            buttonText="Schedule Now"
            buttonHref="/contact"
          />
          <ContactActionCard
            icon={<Send className="w-8 h-8" />}
            title="SUBMIT A PROJECT INQUIRY"
            description="Fill Out The Form Below With Your Project Details And We'll Get Back To You Within 24 Hours."
            buttonText="Fill Out Form"
            buttonHref="/contact"
          />
        </div>
      </div>
      <div className="px-[4%] md:bg-[#fffdfb] bg-[#F9F8F6]">
        <ProjectInquiryForm />
      </div>
    </>
  )
}

export default ContactPage

