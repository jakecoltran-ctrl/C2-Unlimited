import Link from 'next/link';
import Image from 'next/image';
import LiteYouTube from '@/components/ui/LiteYouTube';

export default function CoachingPage() {
  return (
    <div className="bg-gray-950">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-gray-900 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <Link
            href="/services"
            className="inline-flex items-center text-green-400 hover:text-green-300 mb-6 group"
          >
            <svg className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Services
          </Link>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-green-500/20 ring-1 ring-green-500/30">
                  <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <span className="text-green-400 font-semibold tracking-wide uppercase text-sm">Ongoing Development</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white">Coaching & Webinars</h1>
              <p className="mt-4 text-xl text-gray-300 max-w-xl">
                Ongoing development through live coaching calls and webinars that reinforce learning and drive accountability.
              </p>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-3xl blur-2xl" />
                <div className="relative">
                  <LiteYouTube
                    videoId="bcEE_981MuM"
                    title="C2 Coaching & Webinars"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-16">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-6">Training Doesn&apos;t End When the Session Does</h2>
                <p className="text-gray-300 mb-6">
                  Real transformation takes time. That&apos;s why C2 offers ongoing coaching and webinar programs that keep your team learning, growing, and accountable long after initial training is complete.
                </p>
                <p className="text-gray-300 mb-6">
                  Through regular live sessions, your team gets continuous reinforcement of key concepts, opportunities to ask questions, and the accountability they need to turn new skills into lasting habits.
                </p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-6">Coaching Programs</h2>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-500/10 to-gray-800 rounded-xl p-6 ring-1 ring-green-500/20">
                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                      </span>
                      Live Coaching Calls
                    </h3>
                    <p className="text-gray-300 ml-11">
                      Regular group coaching sessions where teams can discuss challenges, share wins, and get real-time guidance on applying the C2 Frameworks in their daily work.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/10 to-gray-800 rounded-xl p-6 ring-1 ring-green-500/20">
                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                      </span>
                      Interactive Webinars
                    </h3>
                    <p className="text-gray-300 ml-11">
                      Focused sessions on specific topics—from handling objections to building customer relationships to leadership communication. Each webinar includes Q&A and practical exercises.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/10 to-gray-800 rounded-xl p-6 ring-1 ring-green-500/20">
                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                      </span>
                      Leadership Coaching
                    </h3>
                    <p className="text-gray-300 ml-11">
                      One-on-one and small group coaching for managers and leaders who want to develop their ability to coach their own teams using the C2 Frameworks.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/10 to-gray-800 rounded-xl p-6 ring-1 ring-green-500/20">
                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                        </svg>
                      </span>
                      Reinforcement Series
                    </h3>
                    <p className="text-gray-300 ml-11">
                      Follow-up sessions designed to reinforce training content over time. Spaced repetition helps your team internalize concepts and build lasting habits.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mt-12 mb-6">Why Ongoing Development Matters</h2>
                <p className="text-gray-300 mb-6">
                  Research shows that without reinforcement, people forget up to 90% of what they learned within a month. Our coaching and webinar programs are designed to combat this &ldquo;forgetting curve&rdquo; and ensure your investment in training pays dividends long-term.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                  <div className="text-center bg-gradient-to-br from-green-500/10 to-gray-800 rounded-xl p-6 ring-1 ring-green-500/20">
                    <div className="text-4xl font-bold text-green-400">90%</div>
                    <p className="text-gray-400 mt-2 text-sm">of training is forgotten without reinforcement</p>
                  </div>
                  <div className="text-center bg-gradient-to-br from-green-500/10 to-gray-800 rounded-xl p-6 ring-1 ring-green-500/20">
                    <div className="text-4xl font-bold text-green-400">6x</div>
                    <p className="text-gray-400 mt-2 text-sm">better retention with ongoing coaching</p>
                  </div>
                  <div className="text-center bg-gradient-to-br from-green-500/10 to-gray-800 rounded-xl p-6 ring-1 ring-green-500/20">
                    <div className="text-4xl font-bold text-green-400">21</div>
                    <p className="text-gray-400 mt-2 text-sm">days to build a new habit</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mt-12 mb-6">Built on the C2 Frameworks</h2>
                <p className="text-gray-300 mb-6">
                  All coaching and webinar content reinforces our core frameworks:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Link
                    href="/grandmother-philosophy"
                    className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10 ring-1 ring-gray-700 hover:ring-green-500/30 transition-all duration-200"
                  >
                    <h4 className="font-semibold text-white group-hover:text-green-400 transition-colors">Grandmother Philosophy™</h4>
                    <p className="text-gray-400 text-sm mt-1">Building trust through genuine care</p>
                  </Link>
                  <Link
                    href="/animal-selling"
                    className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10 ring-1 ring-gray-700 hover:ring-green-500/30 transition-all duration-200"
                  >
                    <h4 className="font-semibold text-white group-hover:text-green-400 transition-colors">Animal Selling™</h4>
                    <p className="text-gray-400 text-sm mt-1">Adapting to customer styles</p>
                  </Link>
                  <Link
                    href="/exspeaktations"
                    className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10 ring-1 ring-gray-700 hover:ring-green-500/30 transition-all duration-200"
                  >
                    <h4 className="font-semibold text-white group-hover:text-green-400 transition-colors">Exspeaktations™</h4>
                    <p className="text-gray-400 text-sm mt-1">The power of intentional language</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Program Details */}
            <div className="mt-12 lg:mt-0">
              <div className="bg-gradient-to-br from-green-500/10 to-gray-800 rounded-2xl p-8 sticky top-24 ring-1 ring-green-500/20">
                <h3 className="font-semibold text-white text-xl mb-6">Program Details</h3>
                <dl className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <dt className="text-gray-400">Duration</dt>
                    <dd className="text-white font-semibold">Ongoing engagement</dd>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <dt className="text-gray-400">Format</dt>
                    <dd className="text-white font-semibold">Virtual sessions</dd>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <dt className="text-gray-400">Team Size</dt>
                    <dd className="text-white font-semibold">Individual to 100+</dd>
                  </div>
                  <div className="flex justify-between items-center">
                    <dt className="text-gray-400">Frequency</dt>
                    <dd className="text-white font-semibold">Weekly to monthly</dd>
                  </div>
                </dl>
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-200"
                  >
                    Start a Coaching Program
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Explore Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/services/training"
              className="group bg-gradient-to-br from-indigo-500/10 to-gray-800 rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg ring-1 ring-indigo-500/20 transition-all duration-200"
            >
              <h3 className="font-semibold text-white text-lg group-hover:text-indigo-400 transition-colors">Custom Sales Training</h3>
              <p className="text-gray-400 mt-2">Training programs built around your company and your people</p>
            </Link>
            <Link
              href="/speaking"
              className="group bg-gradient-to-br from-orange-500/10 to-gray-800 rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg ring-1 ring-orange-500/20 transition-all duration-200"
            >
              <h3 className="font-semibold text-white text-lg group-hover:text-orange-400 transition-colors">Keynote Presentations</h3>
              <p className="text-gray-400 mt-2">High-energy presentations that challenge teams to think differently</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-600 to-green-500 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready for ongoing development?</h2>
          <p className="mt-4 text-xl text-green-100">
            Let&apos;s discuss how coaching can help your team grow continuously.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-green-600 hover:bg-green-50 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
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
