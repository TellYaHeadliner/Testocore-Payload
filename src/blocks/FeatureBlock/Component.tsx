import { Kanit, Kantumruy_Pro } from 'next/font/google'

const kanit = Kanit({ display: 'swap', subsets: ['latin'], weight: '600' })
const kantumruyPro = Kantumruy_Pro({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const CouldHTBRFY = () => {
  return (
    <section className="relative isolate min-w-full overflow-hidden bg-white px-5 py-16 text-black md:px-8 md:py-[120px]">
      <img
        className="pointer-events-none absolute top-[90px] left-[-644px] -z-10 h-[884px] w-[1299px] max-w-none"
        src="/could-htbrfy/network-decoration-left.svg"
        alt=""
      />
      <div className="pointer-events-none absolute top-[-272px] left-[calc(50%+383px)] -z-10 flex h-[1551px] w-[1055px] items-center justify-center max-lg:hidden">
        <img
          className="h-[1055px] w-[1551px] max-w-none -rotate-90"
          src="/could-htbrfy/network-decoration-right.svg"
          alt=""
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-20 md:gap-[160px]">
        <div className="flex w-full flex-col items-center gap-16">
          <div className="flex w-full flex-col gap-6">
            <div className="flex flex-col items-center gap-5">
              <p
                className={`${kanit.className} m-0 text-center text-base leading-[1.5] font-semibold tracking-[2px] text-[#0070a8] uppercase`}
              >
                How Treatment Helps
              </p>
              <h2
                className={`${kantumruyPro.className} m-0 text-center text-[clamp(36px,5vw,48px)] leading-[1.2] font-bold tracking-[-1px]`}
              >
                Benefits of Hormone Therapy
              </h2>
              <p
                className={`${kantumruyPro.className} m-0 max-w-[1180px] text-center text-lg leading-[1.5] font-normal`}
              >
                If you&apos;re experiencing symptoms of menopause or andropause, hormone therapy may
                help restore your hormone levels and improve your overall well-being.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <p
                className={`${kantumruyPro.className} m-0 text-center text-lg leading-[1.5] font-normal`}
              >
                Common symptoms we help address include:
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex min-h-[100px] items-center gap-[12.739px] rounded-[13.273px] border border-[#e4e5e5] bg-[linear-gradient(180deg,#deebf3_20.833%,#3798c0_100%)] p-6">
                  <img className="size-8 shrink-0" src="/could-htbrfy/weight-gain.svg" alt="" />
                  <p
                    className={`${kantumruyPro.className} m-0 text-lg leading-[1.5] font-semibold text-[#11283f]`}
                  >
                    Weight gain
                  </p>
                </div>
                <div className="flex min-h-[100px] items-center gap-[12.739px] rounded-[13.273px] border border-[#e4e5e5] bg-[linear-gradient(180deg,#deebf3_20.833%,#3798c0_100%)] p-6">
                  <img className="size-8 shrink-0" src="/could-htbrfy/low-libido.svg" alt="" />
                  <p
                    className={`${kantumruyPro.className} m-0 text-lg leading-[1.5] font-semibold text-[#11283f]`}
                  >
                    Low libido
                  </p>
                </div>
                <div className="flex min-h-[100px] items-center gap-[12.739px] rounded-[13.273px] border border-[#e4e5e5] bg-[linear-gradient(180deg,#deebf3_20.833%,#3798c0_100%)] p-6">
                  <img className="size-8 shrink-0" src="/could-htbrfy/brain-fog.svg" alt="" />
                  <p
                    className={`${kantumruyPro.className} m-0 text-lg leading-[1.5] font-semibold text-[#11283f]`}
                  >
                    Brain fog
                  </p>
                </div>
                <div className="flex min-h-[100px] items-center gap-[12.739px] rounded-[13.273px] border border-[#e4e5e5] bg-[linear-gradient(180deg,#deebf3_20.833%,#3798c0_100%)] p-6">
                  <img
                    className="size-8 shrink-0"
                    src="/could-htbrfy/trouble-concentrating.svg"
                    alt=""
                  />
                  <p
                    className={`${kantumruyPro.className} m-0 text-lg leading-[1.5] font-semibold text-[#11283f]`}
                  >
                    Trouble concentrating
                  </p>
                </div>
                <div className="flex min-h-[100px] items-center gap-[12.739px] rounded-[13.273px] border border-[#e4e5e5] bg-[linear-gradient(180deg,#deebf3_20.833%,#3798c0_100%)] p-6">
                  <img className="size-8 shrink-0" src="/could-htbrfy/memory-problems.svg" alt="" />
                  <p
                    className={`${kantumruyPro.className} m-0 text-lg leading-[1.5] font-semibold text-[#11283f]`}
                  >
                    Memory problems
                  </p>
                </div>
                <div className="flex min-h-[100px] items-center gap-[12.739px] rounded-[13.273px] border border-[#e4e5e5] bg-[linear-gradient(180deg,#deebf3_20.833%,#3798c0_100%)] p-6">
                  <img className="size-8 shrink-0" src="/could-htbrfy/hot-flashes.svg" alt="" />
                  <p
                    className={`${kantumruyPro.className} m-0 text-lg leading-[1.5] font-semibold text-[#11283f]`}
                  >
                    Hot flashes
                  </p>
                </div>
                <div className="flex min-h-[100px] items-center gap-[12.739px] rounded-[13.273px] border border-[#e4e5e5] bg-[linear-gradient(180deg,#deebf3_20.833%,#3798c0_100%)] p-6">
                  <img className="size-8 shrink-0" src="/could-htbrfy/night-sweats.svg" alt="" />
                  <p
                    className={`${kantumruyPro.className} m-0 text-lg leading-[1.5] font-semibold text-[#11283f]`}
                  >
                    Night sweats
                  </p>
                </div>
                <div className="flex min-h-[100px] items-center gap-[12.739px] rounded-[13.273px] border border-[#e4e5e5] bg-[linear-gradient(180deg,#deebf3_20.833%,#3798c0_100%)] p-6">
                  <img className="size-8 shrink-0" src="/could-htbrfy/mood-swings.svg" alt="" />
                  <p
                    className={`${kantumruyPro.className} m-0 text-lg leading-[1.5] font-semibold text-[#11283f]`}
                  >
                    Mood swings
                  </p>
                </div>
              </div>
            </div>
          </div>

          <a
            className={`${kantumruyPro.className} inline-flex min-w-[200px] items-center justify-center rounded-[15px] bg-gradient-to-t from-[#b03601] to-[#fc8b29] px-5 py-4 text-center text-lg leading-[1.2] font-semibold text-white uppercase shadow-[0px_4px_5px_rgba(0,0,0,0.15)]`}
            href="#consultation"
          >
            Start Now
          </a>
        </div>

        <div className="relative h-auto min-h-[528px] w-full overflow-hidden rounded-[28px] bg-gradient-to-b from-[#3798c0] to-[#2f83a6] lg:h-[528px]">
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

          <div className="relative z-10 flex flex-col gap-[15.4px] px-6 pb-10 text-white md:px-12 lg:absolute lg:top-0 lg:left-[580px] lg:w-[620px] lg:px-0 lg:pt-[60px] lg:pr-[120px] lg:pb-0">
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
              At TestoCore Hormonal Wellness, every treatment plan is personalized to your unique
              needs. Using science-backed therapies, we help restore hormonal balance while
              supporting your overall health, energy, and well-being.
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
        </div>
      </div>
    </section>
  )
}

export default CouldHTBRFY
