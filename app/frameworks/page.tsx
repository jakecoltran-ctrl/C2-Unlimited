import Link from 'next/link';
import Image from 'next/image';
import { bigThree } from '@/lib/data';

const bigThreeLinks = [
  '/grandmother-philosophy',
  '/animal-selling',
  '/exspeaktations',
];

export default function FrameworksPage() {
  return (
    <div className="bg-gray-950">
      {/* Hero */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-4">
            The Foundation of C2 Training
          </p>
          <h1 className="text-5xl font-bold text-white">The C2 Frameworks</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Three memorable frameworks that form the foundation of everything we teach. Training that sticks.
          </p>
        </div>
      </section>

      {/* Frameworks Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 mb-4">
            Click on any framework below to learn more about how it works and how it can help your team.
          </p>
          <div className="flex justify-center gap-8 mb-8">
            <svg className="h-6 w-6 text-blue-500 animate-bounce" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
            <svg className="h-6 w-6 text-blue-500 animate-bounce [animation-delay:150ms]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
            <svg className="h-6 w-6 text-blue-500 animate-bounce [animation-delay:300ms]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {bigThree.map((item, index) => (
              <Link
                key={index}
                href={bigThreeLinks[index]}
                className="group relative border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 bg-gray-900/50"
              >
                <div className="absolute -top-4 left-8 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                  {index + 1}
                </div>
                <h2 className="text-2xl font-semibold text-white mb-3 mt-2 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h2>
                <p className="text-blue-400 text-sm mb-4">{item.tagline}</p>
                <p className="text-gray-300 italic text-lg">{item.description}</p>
                <span className="mt-6 inline-flex items-center text-sm font-semibold text-blue-500 group-hover:text-blue-400">
                  Explore this framework
                  <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Frameworks */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why These Frameworks Work</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Most sales training is forgotten within days. The C2 Frameworks are different. They&apos;re simple enough to remember, practical enough to use immediately, and powerful enough to transform results.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-500 mb-3">Simple</h3>
              <p className="text-gray-300">
                No complicated theories or jargon. Each framework can be explained in minutes and understood by anyone, from new hires to seasoned veterans.
              </p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-500 mb-3">Sticky</h3>
              <p className="text-gray-300">
                Memorable names and relatable concepts mean your team will actually remember these frameworks months and years after training—not just the day after.
              </p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-500 mb-3">Practical</h3>
              <p className="text-gray-300">
                These aren&apos;t abstract concepts—they&apos;re tools your team can use in their very next customer interaction. Immediate application means immediate results.
              </p>
            </div>
          </div>

          {/* The Philosophy */}
          <div className="bg-gray-800/50 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">The C2 Training Philosophy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Training That Transforms</h4>
                <p className="text-gray-300 mb-6">
                  We believe great training doesn&apos;t just teach skills—it changes how people think. The C2 Frameworks give your team new mental models for approaching every customer interaction.
                </p>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Built from Experience</h4>
                <p className="text-gray-300">
                  These frameworks weren&apos;t invented in a boardroom. They were developed over 20+ years working with real sales teams in real stores, refined through thousands of customer interactions.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Works at Every Level</h4>
                <p className="text-gray-300 mb-6">
                  Whether you&apos;re training frontline associates or coaching executives, the C2 Frameworks scale. The concepts are deep enough for leadership discussions yet accessible enough for day-one employees.
                </p>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Culture, Not Just Skills</h4>
                <p className="text-gray-300">
                  When an entire team speaks the same language, something powerful happens. The C2 Frameworks become part of your culture—a shared vocabulary that elevates every interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/images/logo.png"
            alt="C2 Coaching & Training"
            width={100}
            height={40}
            className="h-12 w-auto mx-auto mb-8 opacity-60"
          />
          <h2 className="text-3xl font-bold text-white">Bring the C2 Frameworks to Your Team</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            Let&apos;s talk about how these frameworks can transform your sales culture.
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
