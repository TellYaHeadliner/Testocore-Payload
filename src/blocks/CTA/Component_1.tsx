import styles from './Component_1.module.css'

import { Kanit, Kantumruy_Pro } from 'next/font/google'

const kanit = Kanit({ display: 'swap', subsets: ['latin'], weight: '600' })
const kantumruyPro = Kantumruy_Pro({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})


export default function CTA_1() {
  return (
    <section className={styles.section} aria-label="Call to action">
      <img
        src="/cta/vector_1.svg"
        className="pointer-events-none absolute top-0 left-[-100px] -z-10 flex  w-[605px] items-center justify-center"
      />
      <img
        src="/cta/vector_2.svg"
        className="pointer-events-none absolute top-0 right-[-100px] -z-10 flex h-[663px] w-[605px] items-center justify-center"
      />
      <div className="relative h-auto max-w-[1200px] min-h-[528px] w-full overflow-hidden rounded-[28px] bg-gradient-to-b from-[#3798c0] to-[#2f83a6] lg:h-[528px]">
        <img
          className="pointer-events-none absolute bottom-0 left-0 h-[534px] w-[487px] max-w-none"
          src="/could-htbrfy/dots-left.svg"
          alt=""
        />
        <img
          className="pointer-events-none absolute right-0 bottom-[149px] h-[385px] w-[368px] max-w-none"
          src="/could-htbrfy/dots-right.svg"
          alt=""
        />
        <div className="pointer-events-none relative mx-auto h-[380px] w-full overflow-hidden lg:absolute lg:left-[40px] lg:m-0 lg:h-[593px] lg:w-[564px]">
          <img
            className="absolute top-[-18.82%] left-[-37.54%] h-[118.82%] w-[187.37%] max-w-none"
            src="/could-htbrfy/hormone-wellness-golfer.png"
            alt=""
          />
        </div>

        <div className="relative z-10 max-w-[520px] flex flex-col gap-[48px] px-6 pb-10 text-white md:px-12 lg:absolute lg:top-0 lg:left-[580px] lg:w-[620px] lg:px-0 lg:pt-[121px] lg:pr-[120px] lg:pb-0">
          <div className="flex flex-col gap-2 uppercase">
            <h2 className={`${kantumruyPro.className} m-0 text-[40px] leading-[46px] font-bold`}>
              HORMONE THERAPY
              <span className="block bg-[linear-gradient(8.825deg,#10273e_28.075%,#4473a4_90.123%)] bg-clip-text leading-[50px] text-transparent">
                Can Help Restore Your Quality of Life
              </span>
            </h2>
          </div>
          <div className="flex flex-col items-start gap-8">
            <a
              className={`${kantumruyPro.className} inline-flex min-w-[200px] items-center justify-center rounded-[12px] bg-gradient-to-t from-[#b03601] to-[#fc8b29] px-[23.28px] pt-[10.22px] pb-[11.78px] text-center text-lg leading-[1.2] font-semibold text-white uppercase shadow-[0px_4px_5px_rgba(0,0,0,0.15)]`}
              href="#consultation"
            >
              Schedule Your Consultation Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
