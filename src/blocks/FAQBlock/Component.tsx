'use client'

import { useState } from 'react'

const questions = [
  {
    question: 'What is testosterone replacement therapy?',
    answer:
      'Testosterone replacement therapy (TRT) is a treatment prescribed by a healthcare provider to help restore testosterone levels when testing and symptoms indicate they are low.',
  },
  {
    question: 'How do I know if I have low testosterone?',
    answer:
      'Symptoms can include changes in energy, mood, sex drive, or muscle mass. A healthcare provider can evaluate your symptoms and use blood tests to determine your testosterone levels.',
  },
  {
    question: 'How long does it take for testosterone replacement therapy to work?',
    answer:
      'Some people notice changes in energy, mood, or sexual interest within several weeks. Changes in muscle mass, strength, and body composition typically take longer and can depend on exercise, nutrition, sleep, and consistent treatment.',
  },
  {
    question: 'Is testosterone replacement therapy right for everyone?',
    answer:
      'TRT is not right for everyone. A healthcare provider can review your symptoms, test results, health history, and treatment goals to discuss whether it may be appropriate for you.',
  },
]

export const FAQBlock = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  return (
    <section className="w-full px-6 py-24 sm:px-10">
      <div className="mx-auto w-full max-w-[1070px]">
        <h2 className="mx-auto mb-10 max-w-[650px] text-center text-4xl font-bold leading-tight text-[#078bd3] sm:text-5xl">
          FAQs About Testosterone
          <br />
          Replacement Therapy
        </h2>

        <div className="space-y-2.5">
          {questions.map(({ question, answer }, index) => {
            const isOpen = openQuestion === index
            const answerId = `faq-answer-${index}`

            return (
              <div className="overflow-hidden rounded-[18px] bg-[#3eafe0]" key={question}>
                <button
                  aria-controls={answerId}
                  aria-expanded={isOpen}
                  className="flex min-h-[60px] w-full items-center justify-between gap-6 px-7 py-4 text-left text-lg font-semibold leading-tight text-white sm:px-8 sm:text-xl"
                  onClick={() => setOpenQuestion(isOpen ? null : index)}
                  type="button"
                >
                  <span>{question}</span>
                  <span aria-hidden="true" className="shrink-0 text-2xl font-bold leading-none">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-7 pb-6 text-base leading-relaxed text-white sm:px-8 sm:text-lg" id={answerId}>
                    {answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQBlock
