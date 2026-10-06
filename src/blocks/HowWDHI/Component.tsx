import { Kantumruy_Pro } from 'next/font/google'

const kantumruyPro = Kantumruy_Pro({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700'],
})

const steps = [
  {
    number: 'STEP 01',
    title: 'Comprehensive Hormone Testing',
    points: [
      'Testosterone, estrogen, and other key hormone levels',
      'Additional lab work based on your symptoms',
      'Evaluation of other factors affecting balance',
    ],
  },
  {
    number: 'STEP 02',
    title: 'Consultation & Symptom Review',
    points: [
      'Review your symptoms and health history',
      'Discuss your lifestyle and treatment goals',
      'Physical evaluation when appropriate',
    ],
  },
  {
    number: 'STEP 03',
    title: 'Personalized Treatment Plan',
    points: [
      'Thorough review of your test results',
      'Discuss customized treatment options',
      'Create a plan tailored to your lifestyle',
    ],
  },
]

export const HowWDHI = () => {
  return (
    <section
      className={`${kantumruyPro.className} relative isolate box-border flex w-full flex-col items-center gap-16 overflow-hidden bg-[#3798c0] px-5 py-20 text-white min-[1280px]:px-[18.75vw] min-[1280px]:py-[120px]`}
      aria-labelledby="how-wdhi-title"
    >
      <img
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[682px] w-[623px] max-w-none"
        src="/how-wdhi/background-lower-left.svg"
        alt=""
        width="623"
        height="682"
      />
      <div className="pointer-events-none absolute top-0 right-0 -z-10 flex h-[663px] w-[605px] items-center justify-center">
        <div className="rotate-180">
          <img
            className="block h-[663px] w-[605px] max-w-none"
            src="/how-wdhi/background-upper-right.svg"
            alt=""
            width="605"
            height="663"
          />
        </div>
      </div>

      <header className="relative z-10 flex w-full flex-col items-center gap-6 text-center">
        <h2
          className="m-0 w-full max-w-[800px] text-[clamp(36px,2.5vw,48px)] leading-[1.2] font-bold tracking-[-1px]"
          id="how-wdhi-title"
        >
          How We Diagnose
          <br />
          <span className="bg-[linear-gradient(90deg,#42709f_0%,#11283f_100%)] bg-clip-text text-transparent">
            Hormone Imbalances
          </span>
        </h2>
        <p className="m-0 w-full max-w-[850px] text-lg leading-[1.5] font-normal">
          We don&apos;t guess! We use your symptoms, medical history, and appropriate lab tests to
          understand what&apos;s causing them and determine whether hormone therapy is right for you.
        </p>
      </header>

      <div className="relative z-10 grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <article
            className="box-border flex min-w-0 flex-col items-start gap-6 rounded-[14px] border border-[#e4e5e5] bg-gradient-to-b from-white to-[#bce9fb] p-8"
            key={step.number}
          >
            <div className="flex shrink-0 items-center justify-center rounded-[30px] bg-gradient-to-b from-[#4270a0] to-[#11283f] px-4 py-[6px]">
              <span className="whitespace-nowrap text-base leading-normal font-bold text-white">
                {step.number}
              </span>
            </div>

            <h3 className="m-0 w-full text-[24px] leading-[1.3] font-bold text-[#11283f]">
              {step.title}
            </h3>

            <img
              className="block h-px w-full shrink-0"
              src="/how-wdhi/card-divider.svg"
              alt=""
              width="320"
              height="1"
            />

            <ul className="m-0 flex w-full list-none flex-col gap-4 p-0">
              {step.points.map((point) => (
                <li className="flex w-full items-start gap-3" key={point}>
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-[10px] bg-[#11283f]">
                    <img
                      className="block size-[10px]"
                      src="/how-wdhi/check.svg"
                      alt=""
                      width="10"
                      height="10"
                    />
                  </span>
                  <span className="min-w-0 flex-1 text-lg leading-[1.5] font-normal text-[#11283f]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HowWDHI
