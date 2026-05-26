import Link from 'next/link';
import Image from 'next/image';

const books = [
  {
    title: 'Selling to Your Grandmother™',
    description: 'The book that started it all. Learn the philosophy that has transformed how thousands approach customer relationships.',
    cta: 'Learn More',
    href: '#selling-to-your-grandmother',
    cover: '/images/selling-to-your-grandmother.jpg',
  },
  {
    title: 'Grandmother Philosophy™',
    description: 'A deeper dive into the mindset of treating every customer like family and building lasting trust.',
    cta: 'Learn More',
    href: '#grandmother-philosophy',
    cover: '/images/grandmother-philosophy-book.jpg',
  },
  {
    title: 'Exspeaktations™',
    description: 'Discover how the words we use shape beliefs, expectations, and performance in our teams.',
    cta: 'Learn More',
    href: '#exspeaktations',
    cover: '/images/exspeaktations-book.png',
  },
  {
    title: 'I AM: Intention Tracker',
    description: 'A guided journal and tool to help you stay focused on your daily intentions and track your progress.',
    cta: 'Learn More',
    href: '#intention-tracker',
    cover: '/images/iam-intention-tracker-book.jpg',
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-gray-950">
      {/* Hero */}
      <section className="bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white">Resources</h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            Tools, content, and insights to help you and your team grow.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">Books</span>
            <span className="inline-block bg-teal-600/20 text-teal-400 px-4 py-2 rounded-full text-sm font-medium">Audiobooks</span>
            <span className="inline-block bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">Tools</span>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Books by Chris Coltran</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Explore the books that have helped thousands of sales professionals and leaders transform their approach.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {books.map((book) => (
              <a
                key={book.title}
                href={book.href}
                className="bg-gray-800 rounded-2xl p-8 flex gap-6 hover:bg-gray-750 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={book.cover}
                    alt={`${book.title} book cover`}
                    width={80}
                    height={120}
                    className="rounded-md shadow-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-white">{book.title}</h3>
                  <p className="mt-2 text-gray-400 flex-1">{book.description}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-500">
                    {book.cta}
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Book Details Section */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-semibold uppercase tracking-wide">From Chris Coltran</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Book Details</h2>
          </div>

          {/* Book 1: Selling to Your Grandmother™ */}
          <div id="selling-to-your-grandmother" className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-20 scroll-mt-24">
            <div>
              <h3 className="text-2xl font-bold text-white">Selling to Your Grandmother™</h3>
              <p className="mt-4 text-gray-300 text-lg">
                The book that introduced the Grandmother Philosophy™. Discover how treating every customer
                like family transforms sales results and builds lasting relationships.
              </p>
              <blockquote className="mt-6 text-xl text-gray-400 italic border-l-4 border-blue-500 pl-4">
                'Imagine if you treated every customer like you would treat your own grandmother.'
              </blockquote>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.amazon.com/dp/B07PTBRCGM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  Order Now
                </a>
                <Link
                  href="/grandmother-philosophy"
                  className="inline-flex items-center justify-center rounded-full bg-gray-800 px-6 py-3 font-semibold text-white ring-1 ring-gray-700 hover:bg-gray-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  Learn About the Philosophy
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 flex justify-center">
              <Image
                src="/images/selling-to-your-grandmother.jpg"
                alt="Selling to Your Grandmother™ book cover by Chris Coltran"
                width={280}
                height={420}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Book 2: Grandmother Philosophy™ */}
          <div id="grandmother-philosophy" className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-20 scroll-mt-24">
            <div className="lg:order-2">
              <h3 className="text-2xl font-bold text-white">Grandmother Philosophy™</h3>
              <p className="mt-4 text-gray-300 text-lg">
                A deeper dive into the mindset of treating every customer like family. This book expands on the core principles and provides practical strategies for building lasting trust with every interaction.
              </p>
              <blockquote className="mt-6 text-xl text-gray-400 italic border-l-4 border-blue-500 pl-4">
                'Trust is built one interaction at a time.'
              </blockquote>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.amazon.com/dp/1688800999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  Order Now
                </a>
                <Link
                  href="/grandmother-philosophy"
                  className="inline-flex items-center justify-center rounded-full bg-gray-800 px-6 py-3 font-semibold text-white ring-1 ring-gray-700 hover:bg-gray-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  Learn About the Philosophy
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 flex justify-center lg:order-1">
              <Image
                src="/images/grandmother-philosophy-book.jpg"
                alt="Grandmother Philosophy™ book cover by Chris Coltran"
                width={280}
                height={420}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Book 3: Exspeaktations™ */}
          <div id="exspeaktations" className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-20 scroll-mt-24">
            <div>
              <h3 className="text-2xl font-bold text-white">Exspeaktations™</h3>
              <p className="mt-4 text-gray-300 text-lg">
                Discover how the words we use shape beliefs, expectations, and performance. A powerful guide for leaders who want to transform their team&apos;s culture through intentional language.
              </p>
              <blockquote className="mt-6 text-xl text-gray-400 italic border-l-4 border-blue-500 pl-4">
                'What you say is what you get.'
              </blockquote>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.amazon.com/dp/B0C8RG58BQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  Order Now
                </a>
                <Link
                  href="/exspeaktations"
                  className="inline-flex items-center justify-center rounded-full bg-gray-800 px-6 py-3 font-semibold text-white ring-1 ring-gray-700 hover:bg-gray-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  Learn About the Framework
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 flex justify-center">
              <Image
                src="/images/exspeaktations-book.png"
                alt="Exspeaktations™ book cover by Chris Coltran"
                width={280}
                height={420}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Book 4: I AM: Intention Tracker */}
          <div id="intention-tracker" className="lg:grid lg:grid-cols-2 lg:gap-16 items-center scroll-mt-24">
            <div className="lg:order-2">
              <h3 className="text-2xl font-bold text-white">I AM: Intention Tracker</h3>
              <p className="mt-4 text-gray-300 text-lg">
                A guided journal designed to help you stay focused on what matters most. Set your daily intentions, track your progress, and build the habits that lead to lasting success.
              </p>
              <blockquote className="mt-6 text-xl text-gray-400 italic border-l-4 border-blue-500 pl-4">
                'Intention creates direction.'
              </blockquote>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.amazon.com/dp/B0FGD31SPM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  Order Now
                </a>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 flex justify-center lg:order-1">
              <Image
                src="/images/iam-intention-tracker-book.jpg"
                alt="I AM Intention Tracker book cover by Chris Coltran"
                width={280}
                height={420}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Audiobook Section */}
      <section id="audiobook" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Exspeaktations™ Audiobook</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            Listen to Exspeaktations™ and discover how the words we use shape beliefs, expectations, and performance.
          </p>
          <div className="mt-10 flex flex-col items-center gap-8">
            <Image
              src="/images/chris-audible1.png"
              alt="Exspeaktations™ audiobook available on Audible, narrated by Chris Coltran"
              width={580}
              height={150}
              className="rounded-lg"
            />
            <a
              href="https://www.amazon.com/Audible-Exspeaktations™/dp/B0CBD43DZL/ref=tmm_aud_swatch_0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#1a9a9a] px-8 py-4 text-lg font-semibold text-white hover:bg-[#22b3b3] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              Listen Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
