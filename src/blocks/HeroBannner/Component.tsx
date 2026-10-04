import { Kanit, Kantumruy_Pro } from 'next/font/google'

const kanit = Kanit({
  display: 'swap',
  subsets: ['latin'],
  weight: '600',
})

const kantumruyPro = Kantumruy_Pro({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const HeroBannner = () => {
  return (
    <section className="bg-[#efefef]">
      <div className="relative mx-auto flex w-full max-w-[1920px] flex-col items-start justify-center px-10 pb-10 pt-6">
        <div className="relative w-full overflow-hidden rounded-[30px] bg-white pb-[120px] pt-[200px]">
          <div className="pointer-events-none absolute left-[1067px] top-[calc(50%+20px)] size-[413px] -translate-y-1/2">
            <img alt="" height={413} src="/hero-banner/vector.svg" width={413} />
          </div>
          <div className="pointer-events-none absolute left-[1227px] top-[-175px] flex h-[1119px] w-[761px] items-center justify-center">
            <div className="-rotate-90">
              <img alt="" height={761} src="/hero-banner/vector-network.svg" width={1119} />
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[1120px] items-center gap-[60px]">
            <div
              className={`${kantumruyPro.className} relative z-10 flex w-[560px] shrink-0 flex-col gap-10`}
            >
              <div className="flex w-full flex-col items-start gap-6">
                <p
                  className={`${kanit.className} w-[296px] text-base leading-[1.5] tracking-[2px] text-[#0070a8] uppercase`}
                >
                  Hormone Replacement Therapy in Delray Beach, FL
                </p>
                <h1 className="w-full text-[64px] leading-none font-bold tracking-[-1.28px] capitalize">
                  <span className="block text-[#66676a]">Balance Your Hormones and</span>
                  <span className="block text-[#0070a8]">Feel Recharged and Revitalized</span>
                </h1>
                <p className="w-[480px] text-lg leading-[1.5] font-normal text-[#4a4a4a]">
                  Frequent tiredness, mood swings, and decreased motivation may be part of your life
                  today, but they don&apos;t have to be. Our personalized hormone therapy plans are
                  designed to help restore balance so you can feel your best again.
                </p>
              </div>
              <a
                className="inline-flex min-w-[200px] items-center justify-center rounded-[15px] bg-gradient-to-t from-[#b03601] to-[#fc8b29] px-5 py-3 text-lg leading-[1.2] font-semibold text-white uppercase drop-shadow-[0px_4px_5px_rgba(0,0,0,0.15)]"
                href="#hormones"
              >
                See Where Your Hormones Stand
              </a>
            </div>

            <div className="pointer-events-none absolute top-[-96px] left-[511px] h-[902.816px] w-[754px]">
              <div className="absolute top-[90px] left-[71px] flex h-[729px] w-[683px] items-center justify-center">
                <div className="-scale-y-100 rotate-180">
                  <div className="relative h-[729px] w-[683px] overflow-hidden">
                    <img
                      alt="Man holding a pickleball paddle"
                      className="absolute top-[-14.31%] left-[-13.9%] h-[114.31%] w-[183.16%] max-w-none"
                      src="/hero-banner/hero-photo.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[-21.01px] left-1/2 h-[95.012px] w-[400px] -translate-x-1/2">
          <img alt="" height={95} src="/hero-banner/bot-ar.svg" width={400} />
        </div>
      </div>
    </section>
  )
}
