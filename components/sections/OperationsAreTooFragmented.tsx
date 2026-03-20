import Image from 'next/image'
import OperationsaretoofragmentedImg from "@/public/assets/pngs/Operations-are-too-fragmented-img.png"

const data = [
  "One structured system",
  "One dedicated account leadership team",
  "One coordinated execution model",
  "One place for all operational needs",
  "One unified flow across your business"
]

const OperationsAreTooFragmented = () => {
  return (
    <div className="relative min-h-130 text-white lg:rounded-[70px] overflow-hidden">

      <Image
        src={OperationsaretoofragmentedImg}
        alt="Operations background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 h-full px-[4%] py-16">
        <div className="text-center">
          <h2 className="text-[46px] max-[1200px]:text-[36px] max-[640px]:text-[28px] font-semibold">
            Operations Are Too Fragmented
          </h2>
          <p className="text-base md:text-lg mx-auto max-w-3xl mt-5">
            Managing multiple vendors, inconsistent pricing, staffing challenges,
            and disconnected systems makes it difficult to operate efficiently
            and grow.
          </p>
        </div>
        <div className='bg-white/4 border rounded-2xl border-white/30 px-4 md:px-8 py-14 mt-8 mx-w-[1131px] mx-auto'>
          <p className="text-[36px] max-[1200px]:text-[28px] max-[640px]:text-[22px] text-center font-semibold">Hosperra Simplifies Everything</p>
          <div className='flex flex-wrap justify-center gap-4 md:gap-6 mt-8'>
            {data.map((label) => (
              <p className='bg-white/20 backdrop-blur-[13px] px-10 py-1 w-full sm:w-auto text-center rounded-full md:text-xl' key={label}>{label}</p>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default OperationsAreTooFragmented