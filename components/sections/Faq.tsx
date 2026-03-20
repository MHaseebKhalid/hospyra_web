'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Plus, Minus } from 'lucide-react'

const faqItems = [
  {
    id: 'what',
    question: 'What is Hosperra?',
    answer: 'A complete system that supports and runs your business through one platform with a dedicated team.',
  },
  {
    id: 'how',
    question: 'How does it work?',
    answer: 'You submit your business needs through our platform, and our dedicated team coordinates with the right partners to handle execution, secure strong pricing, and manage everything in one place.',
  },
  {
    id: 'vendors',
    question: 'Do I deal with vendors directly?',
    answer: 'No. Your account leadership team handles vendor coordination, negotiations, and execution—so you can focus on your business.',
  },
  {
    id: 'pricing',
    question: 'How is pricing handled?',
    answer: 'We leverage our network to secure strong pricing on your behalf. Pricing is transparent and managed through the platform.',
  },
  {
    id: 'who',
    question: 'Who can use Hosperra?',
    answer: 'Hosperra is built for hospitality operators—from new restaurants launching their first concept to established brands preparing for expansion and multi-location portfolios.',
  },
  {
    id: 'started',
    question: 'How do I get started?',
    answer: 'Apply through our platform. Once approved, we onboard your business, assign a dedicated team, and you can start submitting requests right away.',
  },
]

const Faq = () => {
  return (
    <section className="py-10 lg:py-16 px-[4%] bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[46px] max-[1200px]:text-[36px] max-[640px]:text-[28px] font-semibold text-center text-[#27272A] mb-8 lg:mb-10">
          Faq
        </h2>

        <Accordion type="single" collapsible defaultValue="what" className="space-y-3">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="rounded-xl bg-[#F7F7F7] border-0 px-0 data-[state=open]:bg-[#F7F7F7]"
            >
              <AccordionTrigger className="group px-6 py-4 hover:no-underline hover:bg-[#F0F0F0] rounded-xl [&>svg:last-child]:hidden">
                <span className="font-medium text-[#27272A] text-base md:text-lg text-left pr-4">
                  {item.question}
                </span>
                <Minus className="size-5 shrink-0 text-[#27272A] hidden group-data-[state=open]:block" />
                <Plus className="size-5 shrink-0 text-[#27272A] block group-data-[state=open]:hidden" />
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0">
                <p className="text-[#52525b] text-sm md:text-base leading-relaxed">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default Faq
