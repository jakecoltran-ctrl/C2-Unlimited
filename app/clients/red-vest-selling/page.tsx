import Link from 'next/link';
import Image from 'next/image';

export default function RedVestSellingPage() {
  return (
    <div className="bg-gray-950">
      {/* Hero */}
      <section className="bg-gray-900 py-24 border-b-4 border-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/clients" className="text-blue-400 hover:text-blue-300 text-sm font-medium mb-4 inline-flex items-center gap-2">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Clients
          </Link>
          <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4 mt-6">Lowe&apos;s</p>
          <h1 className="text-5xl font-bold text-white">Red Vest Selling Program</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Strengthening customer service and selling skills for Lowe&apos;s associates.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-80 lg:h-[400px]">
        <Image
          src="/images/red-vest-selling.png"
          alt="Red Vest Selling program materials and training resources"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none">
            {/* Placeholder for user content */}
            <p className="text-gray-300 text-lg leading-relaxed">
              [Content about Red Vest Selling will go here]
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600">166,456</div>
              <p className="mt-2 text-gray-400">Minutes Watched</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">1,689</div>
              <p className="mt-2 text-gray-400">Graduates</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">3,653</div>
              <p className="mt-2 text-gray-400">Signups</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">25,458</div>
              <p className="mt-2 text-gray-400">Modules Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Interested in Red Vest Selling?</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            Contact us to learn more about implementing this program for your team.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
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
