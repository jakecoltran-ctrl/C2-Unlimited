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
          {/* Program Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Program Overview</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The Red Vest Selling (RVS) Program was created to strengthen Lowe&apos;s associates&apos; customer service and selling skills, with a special focus on increasing flooring details.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Its roots go back to 2018, when C2 Coaching &amp; Training was hired by a flooring provider in the Chicago and St. Louis markets to train Home Depot associates. The sharp sales growth in those regions quickly caught the attention of THD leadership, leading Dave Hronchek, then National Installation Flooring Merchant, to invite C2 to present at corporate headquarters. Impressed by the approach, The Home Depot launched a nationwide initiative. Between 2019 and early 2020, C2 delivered more than 80 live events and trained over 10,000 associates—just before the onset of the COVID-19 pandemic.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Soon after, Dave Hronchek transitioned to Keller Interiors, a Lowe&apos;s flooring installation PROvider. Recognizing the impact of C2&apos;s training, he commissioned a virtual version of the program for Lowe&apos;s associates. This marked the beginning of a five-year partnership that continues today. Together, Keller Interiors and C2 have built and refined Red Vest Selling into a comprehensive training solution designed specifically for Lowe&apos;s associates. The mission has always been consistent: to equip Red Vest associates with the skills, confidence, and customer-first techniques to drive flooring details and elevate the in-store experience.
            </p>
          </div>

          {/* What's Included */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What began as a single video module has grown into a robust platform with:</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">13+ training modules (viewed more than 25,000 times by Lowe&apos;s associates)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">Store handouts, learning assessments, and certificates of completion</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">Red Vest patches for recognition</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">Trainer guides, trainer videos, and ongoing content upgrades</span>
              </li>
            </ul>
          </div>

          {/* Continued Evolution */}
          <div className="bg-gray-800 rounded-2xl p-8 lg:p-10">
            <p className="text-gray-300 text-lg leading-relaxed">
              The program has already undergone two major redesigns, ensuring the content stays relevant and impactful. C2 continues to evolve RVS to meet the needs of today&apos;s associates and tomorrow&apos;s customers.
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
            If you&apos;d like more information about the Red Vest Selling Program or want to explore how it can benefit your store connectivity and your associates, we&apos;d love to connect.
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
