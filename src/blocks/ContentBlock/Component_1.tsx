import { Kantumruy_Pro, Kanit } from 'next/font/google'

const kantumruyPro = Kantumruy_Pro({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const kanit = Kanit({
  display: 'swap',
  subsets: ['latin'],
  weight: ['600'],
})

export const Component_1 = () => {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white px-5 text-black md:px-8">
      <img
        className="pointer-events-none absolute top-[90px] left-[-644px] -z-10 h-[884px] w-[1299px] max-w-none"
        src="/could-htbrfy/network-decoration-left.svg"
        alt=""
      />
      <img
        className="pointer-events-none absolute top-[-272px] left-[calc(50%+383px)] -z-10 h-[1055px] w-[1551px] max-w-none -rotate-90"
        src="/could-htbrfy/network-decoration-right.svg"
        alt=""
      />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-stretch justify-center gap-10 py-16 md:gap-20 md:py-[120px] lg:flex-row">
        <div className="relative min-h-[360px] flex-1 overflow-hidden rounded-2xl border border-[#ececec] md:min-h-[500px] lg:min-h-0">
          <img
            className="absolute inset-y-0 left-[0.08%] h-full w-[137.39%] max-w-none object-cover"
            src="https://www.figma.com/api/mcp/asset/bb83411b-5142-4812-8a36-5c2989defa95.png"
            alt=""
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-start gap-10">
          <div className="flex w-full flex-col items-center gap-5">
            <p
              className={`${kanit.className} m-0 w-full text-center text-sm leading-[14px] font-semibold tracking-[2px] text-[#0070a8] uppercase`}
            >
              How it works
            </p>
            <h2
              className={`${kantumruyPro.className} m-0 w-full text-center text-[clamp(36px,4vw,45px)] leading-[1.16] font-bold text-black`}
            >
              What to Expect
            </h2>
            <div
              className={`${kantumruyPro.className} w-full text-lg leading-[1.5] font-normal text-black`}
            >
              <p className="mb-4 mt-0">
                Beginning hormone therapy is a gradual process, and every patient responds differently. During the first few weeks of treatment, your body begins to adjust as your hormone levels are optimized, and you may start noticing improvements in energy, mood, mental clarity, sleep, and overall well-being.
              </p>
              <p className="m-0">
                As treatment continues over the following months, many patients experience more consistent improvements in their symptoms. Regular follow-up appointments and laboratory testing allow us to monitor your progress and make adjustments when needed, helping ensure your treatment plan continues to support your long-term health and wellness.
              </p>
            </div>
          </div>

          <a
            className={`${kantumruyPro.className} inline-flex min-w-[200px] items-center justify-center rounded-[15px] bg-gradient-to-t from-[#b03601] to-[#fc8b29] px-5 py-4 text-center text-lg leading-[1.2] font-semibold text-white uppercase shadow-[0px_4px_5px_rgba(0,0,0,0.15)]`}
            href="#consultation"
          >
            Start Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default Component_1
