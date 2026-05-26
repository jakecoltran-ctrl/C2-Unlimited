import Link from 'next/link';
import Image from 'next/image';
import LiteYouTube from '@/components/ui/LiteYouTube';

export default function ExspeaktationsPage() {
  return (
    <div className="bg-gray-950">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-900/30 via-gray-900 to-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-400 font-semibold tracking-wide uppercase text-sm mb-4">
            The C2 Frameworks
          </p>
          <h1 className="text-5xl font-bold text-white">Exspeaktations™</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            A leadership concept based on how the words we use shape expectations and performance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-invert">
              <blockquote className="text-2xl text-white italic border-l-4 border-teal-500 pl-6 my-8">
                &apos;What you say is what you get.&apos;
              </blockquote>

              <div className="bg-teal-600 rounded-xl p-6 mb-8">
                <p className="text-white text-lg font-semibold text-center mb-2">The Core Principle</p>
                <p className="text-teal-100 text-center">Your words shape your thoughts, your thoughts drive your actions, and your actions determine your future.</p>
              </div>

              {/* Video */}
              <div className="my-12">
                <h3 className="text-xl font-bold text-white text-center mb-4">Watch: Exspeaktations™</h3>
                <LiteYouTube
                  videoId="f4brHBdFH1s"
                  title="Exspeaktations™ - Chris Coltran"
                />
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Concept</h2>
              <div className="bg-gray-800 rounded-xl p-6 mb-6">
                <p className="text-gray-300 mb-4">
                  The title &ldquo;Exspeaktations™&rdquo; essentially means &ldquo;what you say is what you get,&rdquo; underscoring the profound influence of our words on our thoughts, emotions, actions, and ultimately, our reality.
                </p>
                <p className="text-gray-300">
                  The power of our words to shape our lives has been a timeless theme, and this book shines a light on expectations and the role our language and self-talk plays in creating our destinies.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Science Behind It</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">The Law of Attraction</h3>
                  <p className="text-gray-300">
                    Ancient wisdom traditions and modern psychology both emphasize that like attracts like. If you expect positive outcomes and express these expectations through your words, you&apos;re more likely to experience positive results.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Cognitive Psychology</h3>
                  <p className="text-gray-300">
                    It&apos;s grounded in neuroscience. Our brains are wired to seek confirmation of our beliefs. When we express positive expectations, our brain actively looks for evidence to support them.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Neuroplasticity</h3>
                  <p className="text-gray-300">
                    Our thoughts literally rewire our brains. Repeated positive affirmations create new neural pathways that make positive thinking more automatic over time.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Power of &ldquo;I AM&rdquo; Affirmations</h2>
              <div className="bg-gray-800 rounded-xl p-6 mb-6 border-l-4 border-teal-500">
                <p className="text-gray-300 mb-4">
                  Affirmations are positive statements that you repeat to yourself regularly. They&apos;re designed to challenge and replace negative self-talk and self-limiting beliefs.
                </p>
                <p className="text-white italic">
                  &ldquo;I am confident, capable, and worthy of success.&rdquo;
                </p>
              </div>
              <p className="text-gray-300 mb-6">
                The magic of affirmations lies in their ability to reshape your beliefs and expectations. When you repeatedly speak positive statements about yourself, you begin to internalize these beliefs. Over time, your expectations align with your affirmations.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Self-Fulfilling Prophecies</h2>
              <p className="text-gray-300 mb-6">
                When you speak about your expectations, you&apos;re not just talking; you&apos;re setting intentions. You&apos;re telling the universe (and yourself) what you want and believe to be true.
              </p>
              <div className="bg-gray-800 rounded-xl p-6 mb-6">
                <p className="text-teal-400 text-sm font-semibold uppercase tracking-wide mb-2">Example</p>
                <p className="text-gray-300">
                  If you constantly tell yourself you&apos;re terrible at public speaking, you&apos;ll avoid opportunities, missing chances for improvement. But if you shift to &ldquo;I am working on improving my public speaking skills,&rdquo; you&apos;ll seek growth opportunities, leading to confidence.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Key Practices</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="text-white font-semibold">Visualization</p>
                  <p className="text-gray-400 text-sm mt-1">Mentally picture your desired outcomes</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="text-white font-semibold">Affirmations</p>
                  <p className="text-gray-400 text-sm mt-1">Repeat positive &ldquo;I AM&rdquo; statements daily</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="text-white font-semibold">Journaling</p>
                  <p className="text-gray-400 text-sm mt-1">Write down and challenge negative patterns</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="text-white font-semibold">Vision Boards</p>
                  <p className="text-gray-400 text-sm mt-1">Create visual reminders of your goals</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Breaking Negative Self-Talk</h2>
              <p className="text-gray-300 mb-6">
                One of the most significant challenges is breaking the cycle of negative self-talk and self-defeating language. The book provides strategies to identify and challenge these destructive thought patterns.
              </p>
              <div className="bg-gray-800 rounded-xl p-6 mb-6">
                <p className="text-gray-300">
                  Use the I AM Intention Tracker to write down your thoughts through 21 thought-provoking topics. By paying attention to recurring negative phrases, you can confront and reframe them. If you notice &ldquo;I&apos;ll never be good enough,&rdquo; challenge it by writing about your accomplishments.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Transformation</h2>
              <p className="text-gray-300 mb-6">
                Changing your language and expectations is a journey requiring consistent effort and self-awareness. By becoming more mindful of your words and deliberately shaping your expectations, you can harness the transformative power of Exspeaktations™ to create the life you desire.
              </p>

              <div className="bg-teal-600 rounded-xl p-6 mb-6 text-center">
                <p className="text-white text-lg font-semibold">
                  Thoughts become your words. Words become your actions. Actions determine your future.
                </p>
              </div>

              {/* The Book */}
              <div className="bg-gray-800 rounded-2xl p-8 mt-12">
                <div className="flex flex-col sm:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/exspeaktations-book.png"
                      alt="Exspeaktations™ book cover"
                      width={180}
                      height={270}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <div>
                    <p className="text-teal-400 text-sm font-semibold uppercase tracking-wide mb-2">The Book</p>
                    <h3 className="text-2xl font-bold text-white mb-3">Exspeaktations™</h3>
                    <p className="text-gray-300 mb-4">
                      Available on Amazon for purchase. If you really want to be more intentional with yourself, your team, your study group, or a church group — get a copy of the accompanying I AM Intention Tracker as well.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://www.amazon.com/dp/B0C8RG58BQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-teal-600 px-5 py-2 text-sm font-semibold text-white hover:bg-teal-500 transition-all duration-200"
                      >
                        Order on Amazon
                      </a>
                      <a
                        href="https://www.amazon.com/Audible-Exspeaktations/dp/B0CBD43DZL/ref=tmm_aud_swatch_0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-gray-700 px-5 py-2 text-sm font-semibold text-white hover:bg-gray-600 transition-all duration-200"
                      >
                        Listen on Audible
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* I AM Intention Tracker */}
              <div className="bg-gray-800 rounded-2xl p-8 mt-8">
                <div className="flex flex-col sm:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/iam-intention-tracker-book.jpg"
                      alt="I AM Intention Tracker book cover"
                      width={180}
                      height={270}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <div>
                    <p className="text-teal-400 text-sm font-semibold uppercase tracking-wide mb-2">The Companion Guide</p>
                    <h3 className="text-2xl font-bold text-white mb-3">I AM Intention Tracker</h3>
                    <p className="text-gray-300 mb-4">
                      The accompanying 21-step I AM Intention Tracker focuses on mindset and the power that your words and thoughts have over your outcomes. Already being used in coaching and training sessions for professionals.
                    </p>
                    <a
                      href="https://www.amazon.com/dp/B0FGD31SPM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-teal-600 px-5 py-2 text-sm font-semibold text-white hover:bg-teal-500 transition-all duration-200"
                    >
                      Order on Amazon
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Big Three */}
            <div className="mt-16 pt-12 border-t border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-6">Explore the Other Frameworks</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/grandmother-philosophy"
                  className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  <h4 className="font-semibold text-white">The Grandmother Philosophy™</h4>
                  <p className="text-gray-400 text-sm mt-1">Build trust through genuine care</p>
                </Link>
                <Link
                  href="/animal-selling"
                  className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  <h4 className="font-semibold text-white">Animal Selling™</h4>
                  <p className="text-gray-400 text-sm mt-1">Recognize different customer buying styles</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/images/logo.png"
            alt="C2 Coaching & Training"
            width={80}
            height={32}
            className="h-10 w-auto mx-auto mb-6 opacity-80"
          />
          <h2 className="text-3xl font-bold text-white">Ready to transform your team&apos;s language and culture?</h2>
          <p className="mt-4 text-xl text-teal-100">
            Let&apos;s talk about bringing Exspeaktations™ to your leadership.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-teal-600 hover:bg-teal-50 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
          >
            Contact Us
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
