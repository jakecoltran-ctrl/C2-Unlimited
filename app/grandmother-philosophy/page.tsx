import Link from 'next/link';
import Image from 'next/image';
import LiteYouTube from '@/components/ui/LiteYouTube';

export default function GrandmotherPhilosophyPage() {
  return (
    <div className="bg-gray-950">
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-900/30 via-gray-900 to-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-rose-400 font-semibold tracking-wide uppercase text-sm mb-4">
            The C2 Frameworks
          </p>
          <h1 className="text-5xl font-bold text-white">The Grandmother Philosophy™</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            A customer service and sales mindset built on trust, respect, honesty, and doing what is right.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-invert">
              <blockquote className="text-2xl text-white italic border-l-4 border-rose-500 pl-6 my-8">
                &apos;Imagine if you treated every customer like you would treat your own grandmother.&apos;
              </blockquote>

              <div className="bg-rose-600 rounded-xl p-6 mb-8">
                <p className="text-white text-lg font-semibold text-center mb-2">The Core Principle</p>
                <p className="text-rose-100 text-center">Trust. Respect. Honesty. Doing what is right.</p>
              </div>

              {/* Video */}
              <div className="my-12">
                <h3 className="text-xl font-bold text-white text-center mb-4">Watch: The Grandmother Philosophy™</h3>
                <LiteYouTube
                  videoId="KsxojEubO04"
                  title="The Grandmother Philosophy™ - Chris Coltran"
                />
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Origin Story</h2>
              <div className="bg-gray-800 rounded-xl p-6 mb-6">
                <p className="text-gray-300 mb-4">
                  I was working as a sales rep for a flooring distributor and awoke to the usual sound of a 6:30 am wake up call. By 8:00 am I was headed to my first appointment of the day.
                </p>
                <p className="text-gray-300">
                  Of all the sales calls, sales meetings, and sales trainings I had ever attended, today would prove to be the most important sales lesson of them all, and a turning point in my career. Little did I know, everything in my life would change before returning to my hotel room later that evening.
                </p>
              </div>

              <p className="text-gray-300 mb-6">
                After spending a few minutes saying hello to a half dozen salespeople, I sat down with the general manager and owner for my appointment. The first item on my agenda was to ask John to answer a question that I had been curious about since our last meeting. John&apos;s store, in a market with a population of 90,000 people, had consistently been in the top 5 in the country, and I wanted to know why? What were they doing differently? What was their secret?
              </p>

              <div className="bg-gray-800 rounded-xl p-6 mb-6 border-l-4 border-rose-500">
                <p className="text-gray-300 italic">
                  John&apos;s response was one that I will never forget. He thought that if he told me I would laugh, but after promising not to, he told me he felt the reason his store had been so successful was because he had always told his salespeople to <strong className="text-white">treat their customers like they would treat their own Grandma.</strong>
                </p>
              </div>

              <p className="text-gray-300 mb-6">
                I immediately looked at John and said, &ldquo;What a great idea for a book!&rdquo; His response was, &ldquo;Yeah! But who would write it?&rdquo;
              </p>
              <p className="text-gray-300 mb-6">
                As soon as I walked out of his store, I thought to myself, why not me? When I arrived back to my hotel that evening, I made the first outline of what I had decided to call the Grandmother Philosophy™.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Philosophy in Practice</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Show Only the Best</h3>
                  <p className="text-gray-300">
                    You would make sure and only show her products that you would feel comfortable with her buying, and you would never sell her a product that you would not put into your own home.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Fair & Honest Pricing</h3>
                  <p className="text-gray-300">
                    You would give her a fair price, and you wouldn&apos;t try to cheat her or take advantage of her. Because she is your Grandmother, she expects you to make a profit.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Quality Service</h3>
                  <p className="text-gray-300">
                    You would put your best delivery crew on the job, and you would make sure they were on time and professional. You would give her the best service you possibly could.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Follow Through</h3>
                  <p className="text-gray-300">
                    You would call her the day after delivery and verify that everything was to her satisfaction. If she had a problem, you would take care of it immediately.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">The GRANDMOTHER Acronym</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-rose-500 font-bold mr-3 w-6">G</span>
                  <span><strong className="text-white">Greet</strong> every customer immediately</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 font-bold mr-3 w-6">R</span>
                  <span><strong className="text-white">Read</strong> body language</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 font-bold mr-3 w-6">A</span>
                  <span><strong className="text-white">Attitude</strong> is Everything</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 font-bold mr-3 w-6">N</span>
                  <span><strong className="text-white">Never</strong> Prejudge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 font-bold mr-3 w-6">D</span>
                  <span><strong className="text-white">Do</strong> unto others as you would want done unto you</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 font-bold mr-3 w-6">M</span>
                  <span><strong className="text-white">Make</strong> an impression that will last a lifetime</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 font-bold mr-3 w-6">O</span>
                  <span><strong className="text-white">Own</strong> your Products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 font-bold mr-3 w-6">T</span>
                  <span><strong className="text-white">Think</strong> like a Salesperson</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 font-bold mr-3 w-6">H</span>
                  <span><strong className="text-white">Honesty,</strong> Honesty, Honesty</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 font-bold mr-3 w-6">E</span>
                  <span><strong className="text-white">Everyone</strong> is a potential customer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 font-bold mr-3 w-6">R</span>
                  <span><strong className="text-white">Remember</strong> to &ldquo;Treat Every Customer Like You Would Treat Your Own Grandmother.&rdquo;</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Why It Works</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="text-white font-semibold">Builds Trust</p>
                  <p className="text-gray-400 text-sm mt-1">Customers feel valued and respected</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="text-white font-semibold">Creates Loyalty</p>
                  <p className="text-gray-400 text-sm mt-1">They come back and refer others</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="text-white font-semibold">Drives Results</p>
                  <p className="text-gray-400 text-sm mt-1">Genuine care leads to more sales</p>
                </div>
              </div>

              {/* The Book */}
              <div className="bg-gray-800 rounded-2xl p-8 mt-12">
                <div className="flex flex-col sm:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/selling-to-your-grandmother.jpg"
                      alt="Selling to Your Grandmother™ book cover"
                      width={180}
                      height={270}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <div>
                    <p className="text-rose-400 text-sm font-semibold uppercase tracking-wide mb-2">The Book</p>
                    <h3 className="text-2xl font-bold text-white mb-3">Selling to Your Grandmother™</h3>
                    <p className="text-gray-300 mb-4">
                      The Grandmother Philosophy™ originated from Chris Coltran&apos;s book. This foundational work explores how treating every customer like family transforms sales results and builds lasting relationships.
                    </p>
                    <a
                      href="https://www.amazon.com/Selling-Your-Grandmother-Chris-Coltran/dp/0976015609"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white hover:bg-rose-500 transition-all duration-200"
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
                  href="/animal-selling"
                  className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  <h4 className="font-semibold text-white">Animal Selling™</h4>
                  <p className="text-gray-400 text-sm mt-1">Recognize different customer buying styles</p>
                </Link>
                <Link
                  href="/exspeaktations"
                  className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  <h4 className="font-semibold text-white">Exspeaktations™</h4>
                  <p className="text-gray-400 text-sm mt-1">How words shape expectations and performance</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rose-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/images/logo.png"
            alt="C2 Coaching & Training"
            width={80}
            height={32}
            className="h-10 w-auto mx-auto mb-6 opacity-80"
          />
          <h2 className="text-3xl font-bold text-white">Want to bring this philosophy to your team?</h2>
          <p className="mt-4 text-xl text-rose-100">
            Let&apos;s talk about how C2 can help transform your customer interactions.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-rose-600 hover:bg-rose-50 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
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
