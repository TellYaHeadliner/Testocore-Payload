import { Kanit, Kantumruy_Pro } from 'next/font/google'
import VideoPlayer from '@/components/VideoPlayer'
import Script from 'next/script';
import { cn } from '@/utilities/ui';

const kanit = Kanit({ display: 'swap', subsets: ['latin'], weight: '600' })
const kantumruyPro = Kantumruy_Pro({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const videos = [
  { src: '/video/boca1.mp4', title: 'Client Testimonial 1' },
  { src: '/video/boca2.mp4', title: 'Client Testimonial 2' },
  { src: '/video/boca4.mp4', title: 'Client Testimonial 3' },
]

export const ReviewBlock = () => {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#f4f7f9] px-5 py-16 md:px-8 md:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 md:gap-16">
        {/* Tiêu đề Section */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2
            className={`${kantumruyPro.className} m-0 text-[clamp(32px,5vw,48px)] font-bold leading-[1.2] text-[#11283f]`}
          >
            See What Our Patients Are Saying
          </h2>
        </div>

        {/* Danh sách video */}
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {videos.map((video, index) => (
            <div
              key={index}
              className="w-full max-w-[360px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] bg-black"
            >
              <VideoPlayer src={video.src} className="w-full h-auto !max-w-full" />
            </div>
          ))}
        </div>

        <div className={cn('w-full flex mx-auto text-center font-normal text-[17px] leading-[25px] text-[#0070A8] not-italic', kantumruyPro.className)}>
          Disclaimer: The content of this website, including health-related information, is for
          informational purposes only and does not create a physician- patient relationship. It's
          intended to supplement, not replace, the advice of your personal physician or other
          healthcare professionals. The information is not meant for diagnosing, treating, curing,
          or preventing any disease and should be discussed with a healthcare provider to determine
          what is appropriate for you. This site aims to offer a broad understanding of general
          health topics, not comprehensive medical guidance. Always consult your physician or
          healthcare provider before beginning any new treatment or therapy. Services mentioned may
          be subject to state regulations and require a consultation and prescription by a licensed
          physician.
        </div>
      </div>
    </section>
  )
}

export default ReviewBlock
