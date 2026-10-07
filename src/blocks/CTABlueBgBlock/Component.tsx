import style from "./style.module.css"

import { Kanit, Kantumruy_Pro } from 'next/font/google'
const kantumruyPro = Kantumruy_Pro({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})
export const CTABlueBg = () => {
  return (
    <section className={style.section}>
      <img
        src="/cta/vector_3.svg"
        className="pointer-events-none absolute top-0 left-[-100px]  flex w-[605px] items-center justify-center"
      />
      <img
        src="/cta/vector_4.svg"
        className="pointer-events-none absolute top-0 right-[-100px]  flex w-[605px] items-center justify-center"
      />
    </section>
  )
}