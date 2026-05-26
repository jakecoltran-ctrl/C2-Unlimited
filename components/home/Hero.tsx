import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-950 pt-12 pb-8 lg:pt-16 lg:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-4">
          C2 Coaching & Training
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          Sales Training That Sticks
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
          C2 creates custom sales training, keynotes, coaching calls, and webinars built around memorable frameworks that help sales teams communicate better, sell smarter, and create stronger customer experiences.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/clients"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 w-full sm:w-auto"
          >
            See Our Work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-800 px-6 py-3 text-lg font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-gray-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 w-full sm:w-auto"
          >
            Contact Us
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
        <div className="mt-8">
          <Image
            src="/images/logo.png"
            alt="C2 Coaching & Training"
            width={400}
            height={160}
            className="h-40 w-auto mx-auto opacity-70"
          />
        </div>
      </div>
    </section>
  );
}
