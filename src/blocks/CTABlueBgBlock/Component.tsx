import style from "./style.module.css"

import { Kantumruy_Pro, Kanit } from 'next/font/google'
const kantumruyPro = Kantumruy_Pro({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const kanit = Kanit({ display: 'swap', subsets: ['latin'], weight: '600' })

export const CTABlueBg = () => {
  return (
    <section className={style.section}>
      <img
        src="/cta/vector_3.svg"
        className="pointer-events-none absolute top-0 left-[-300px] flex w-[605px] items-center justify-center"
      />
      <img
        src="/cta/vector_4.svg"
        className="pointer-events-none absolute top-0 right-[-300px] flex w-[605px] items-center justify-center"
      />
      <div className="relative h-auto w-full overflow-hidden lg:h-[527px]">
        <div className="pointer-events-none relative mx-auto h-[527px] w-full overflow-hidden lg:absolute lg:left-[170px] lg:m-0 lg:h-[593px] lg:w-[564px]">
          <img src="/cta/girl_cta.svg" className="absolute " />
        </div>
      </div>
      <div className="relative z-10 flex flex-col gap-[15.4px] px-6 pb-10 text-white md:px-12 lg:absolute lg:top-0 lg:left-[650px] lg:w-[620px] lg:px-0 lg:pt-[60px] lg:pr-[120px] lg:pb-0">
        <div className="flex flex-col gap-2 uppercase">
          <p
            className={`${kanit.className} m-0 text-base leading-[1.5] font-semibold tracking-[2px]`}
          >
            Why Choose Us
          </p>
          <h2 className={`${kantumruyPro.className} m-0 text-[40px] leading-[46px] font-bold`}>
            WHY CHOOSE
            <span className="block bg-[linear-gradient(8.825deg,#10273e_28.075%,#4473a4_90.123%)] bg-clip-text leading-[50px] text-transparent">
              TESTOCORE HORMONAL WELLNESS
            </span>
          </h2>
        </div>
        <p
          className={`${kantumruyPro.className} m-0 pt-[13.99px] text-lg leading-[1.5] font-normal`}
        >
          At TestoCore Hormonal Wellness, every treatment plan is personalized to your unique needs.
          Using science-backed therapies, we help restore hormonal balance while supporting your
          overall health, energy, and well-being.
        </p>
        <div className="flex flex-col items-start gap-8">
          <p className={`${kantumruyPro.className} m-0 text-lg leading-[1.5] font-normal`}>
            Ready to feel your best again?
          </p>
          <a
            className={`${kantumruyPro.className} inline-flex min-w-[200px] items-center justify-center rounded-[12px] bg-gradient-to-t from-[#b03601] to-[#fc8b29] px-[23.28px] pt-[10.22px] pb-[11.78px] text-center text-lg leading-[1.2] font-semibold text-white uppercase shadow-[0px_4px_5px_rgba(0,0,0,0.15)]`}
            href="#consultation"
          >
            Schedule Your Consultation Today
          </a>
        </div>
      </div>
    </section>
  )
}