'use client'
import Link from 'next/link'

const FocusOnGrowthCTA = () => {
  return (
    <section className="md:px-[4%] mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="md:rounded-[2rem] bg-[#FF3500] px-8 py-12 lg:px-12 lg:py-14 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Focus On Growth Not Operations
          </h2>
          <p className="mt-4 text-lg md:text-xl text-white/95 max-w-2xl">
            Hosperra Brings Structure, Execution, And Efficiency Into Your Business.
          </p>

          <div className="grid max-[670px]:grid-cols-1 grid-cols-2 max-w-226.5 w-full mx-auto gap-4 mt-8">
            <Link
              href="/partner"
              className="w-full px-8 py-3 rounded-lg bg-white text-[#27272A] font-medium hover:bg-white/90 transition-colors text-center"
            >
              Join Now — Pay $0 Signup Fee
            </Link>
            <Link
              href="/contact"
              className="w-full px-8 py-3 rounded-lg bg-white/30 text-white font-medium hover:bg-white/10 transition-colors text-center"
            >
              Book A Demo
            </Link>
          </div>

          <p className="mt-8 text-sm text-white">
            Limited Time — $499 Value
          </p>
        </div>
      </div>
    </section>
  )
}

export default FocusOnGrowthCTA;
