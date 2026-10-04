const contactFields = [
  { label: 'Full Name *', value: 'Full Name', type: 'text' },
  {
    label: 'Service Interested In *',
    value: 'Please select the service you require',
    type: 'select',
  },
  { label: 'Phone *', value: '(000) 000-0000', type: 'text' },
  { label: 'Email *', value: 'email@example.com', type: 'text' },
  { label: 'Message', value: 'Tell us how we can help you...', type: 'message' },
] as const

const reviewStars = Array.from({ length: 5 }, (_, index) => index)

export const WhyChooseUsBlock = () => {
  return (
    <section
      className="box-border w-full bg-[#3798c0] px-5 py-16 text-white md:px-8 md:py-[120px]"
      aria-labelledby="why-choose-title"
    >
      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 items-start gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.88fr)] lg:gap-[5vw] xl:grid-cols-[minmax(0,600px)_minmax(0,440px)] xl:gap-20">
        <div className="flex min-w-0 flex-col gap-6 lg:col-start-1 lg:row-start-1">
          <div className="box-border flex w-full flex-col gap-6 rounded-2xl border border-[#d1d5db] bg-[#f9f9f9] p-6 text-[#212529] shadow-[0_24px_24px_rgba(0,0,0,0.08)] md:p-8">
            <div className="flex flex-col gap-3">
              <h2 className="m-0 font-['Kantumruy_Pro',sans-serif] text-[22px] leading-[1.2] font-bold text-[#212529]">
                REQUEST CONSULTATION
              </h2>
              <p className="m-0 font-['Kantumruy_Pro',sans-serif] text-[18px] leading-[1.5] font-normal text-[#4a4a4a]">
                Please complete the form below, and we&apos;ll reach out as soon as possible.
              </p>
            </div>

            <div className="flex flex-col gap-4" aria-label="Consultation form preview">
              {contactFields.map((field) => (
                <div className="flex min-w-0 flex-col gap-2" key={field.label}>
                  <span className="font-[Arial,sans-serif] text-[14px] leading-[1.2] font-medium text-[#212529]">
                    {field.label}
                  </span>
                  <div
                    className={`flex min-h-12 w-full items-center justify-between rounded-lg border border-[#d1d5db] bg-white p-3 font-[Arial,sans-serif] text-[15px] leading-[1.4] font-normal text-[rgba(75,85,99,0.6)] ${field.type === 'message' ? 'items-start' : ''}`}
                  >
                    <span>{field.value}</span>
                    {field.type === 'select' && (
                      <img src="/why-choose-chevron.svg" alt="" width="11.5" height="6.5" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="flex min-h-14 items-center justify-center rounded-[15px] bg-gradient-to-t from-[#b03601] to-[#fc8b29] px-5 py-4 text-center text-[15px] leading-[1.2] font-semibold text-white uppercase shadow-[0_4px_5px_rgba(0,0,0,0.15)] md:text-[18px]"
              aria-label="Schedule your hormone consultation today"
            >
              SCHEDULE YOUR HORMONE CONSULTATION TODAY
            </div>
          </div>

          <p className="m-0 font-['Kantumruy_Pro',sans-serif] text-[16px] leading-[1.5] font-normal text-white">
            By submitting this form, you agree to be contacted by Testocore Hormonal Wellness via
            phone, email, and/or text message regarding your inquiry. Message and data rates may
            apply. Consent is not a condition of purchase and you may opt-out of text communications
            at any time.
          </p>
        </div>

        <div className="flex min-w-0 flex-col gap-6 max-lg:order-first">
          <div className="flex flex-col gap-4">
            <p className="m-0 font-['Kanit',sans-serif] text-[16px] leading-[1.5] font-semibold tracking-[2px] text-white uppercase">
              Customized Treatment
            </p>
            <h1
              className="m-0 max-w-[472px] font-['Kantumruy_Pro',sans-serif] text-[clamp(36px,10vw,48px)] leading-[1.2] font-bold tracking-[-1px] text-white md:text-[48px]"
              id="why-choose-title"
            >
              Treatment Without Any Guesswork
            </h1>
          </div>

          <p className="m-0 font-['Kantumruy_Pro',sans-serif] text-[18px] leading-[1.5] font-normal text-white">
            A thorough evaluation and testing help determine whether hormones are contributing to
            your symptoms. From there, we create a personalized treatment plan designed to help you
            feel more energized, focused, and like yourself again.
          </p>

          <div
            className="flex min-h-[178px] w-fit items-center justify-between gap-[clamp(16px,3vw,30px)] overflow-hidden rounded-2xl bg-white p-5 shadow-[-5.5px_-2.75px_22px_rgba(0,0,0,0.04),27.5px_19.25px_55px_rgba(0,0,0,0.05)] min-[768px]:p-8 max-[420px]:gap-3 max-[420px]:px-4"
            aria-label="Google rating 4.9 out of 5, 21 reviews"
          >
            <img
              className="block h-16 w-[58px] shrink-0 min-[1200px]:h-20 min-[1200px]:w-[73px] max-[420px]:h-[51px] max-[420px]:w-[46px]"
              src="/why-choose-google.svg"
              alt="Google"
              width="73"
              height="80"
            />
            <div className="flex min-w-0 flex-col gap-4">
              <div className="flex items-center justify-between gap-2 whitespace-nowrap font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-[22px] font-bold text-[#6a6a6a] min-[421px]:text-base min-[1200px]:gap-[18px] min-[1200px]:text-xl">
                <span>Google Rating</span>
                <span className="text-[11px] font-medium min-[421px]:text-[13px] min-[1200px]:text-base">
                  21 Reviews
                </span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap font-['Plus_Jakarta_Sans',sans-serif] text-[25px] leading-none font-extrabold text-[#fea500] min-[421px]:gap-3 min-[1200px]:gap-[22px] min-[1200px]:text-[33px]">
                <span>4.9</span>
                <div className="flex items-center" aria-hidden="true">
                  {reviewStars.map((star) => (
                    <img
                      className="block h-6 w-6 shrink-0 min-[421px]:h-[30px] min-[421px]:w-[30px] min-[1200px]:h-[38.5px] min-[1200px]:w-[38.5px]"
                      src="/why-choose-star.svg"
                      alt=""
                      width="38.5"
                      height="38.5"
                      key={star}
                    />
                  ))}
                </div>
              </div>
              <p className="m-0 whitespace-nowrap font-['Plus_Jakarta_Sans',sans-serif] text-[13px] leading-[1.3] font-normal text-[#868686] min-[421px]:text-base">
                See all our reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsBlock
