import Link from 'next/link';
import Image from 'next/image';
import LiteYouTube from '@/components/ui/LiteYouTube';

export default function TrainingPage() {
  return (
    <div className="bg-gray-950">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-gray-900 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <Link
            href="/services"
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-6 group"
          >
            <svg className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Services
          </Link>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-indigo-500/20 ring-1 ring-indigo-500/30">
                  <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                </div>
                <span className="text-indigo-400 font-semibold tracking-wide uppercase text-sm">Custom Training</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white">Custom Sales Training</h1>
              <p className="mt-4 text-xl text-gray-300 max-w-xl">
                We build sales training programs around your company, your people, your process, your customers, and your language.
              </p>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
                <div className="relative">
                  <LiteYouTube
                    videoId="Sl-hyvBJzMw"
                    title="C2 Custom Sales Training"
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
                <h2 className="text-2xl font-bold text-white mb-6">Training That Actually Sticks</h2>
                <p className="text-gray-300 mb-6">
                  Most sales training is forgotten within days. Teams sit through sessions, nod along, and then go back to doing exactly what they were doing before. That&apos;s not training—that&apos;s a waste of time and money.
                </p>
                <p className="text-gray-300 mb-6">
                  C2&apos;s custom training programs are different. Built on our C2 Frameworks—The Grandmother Philosophy™, Animal Selling™, and Exspeaktations™—our training gives your team memorable, practical tools they&apos;ll actually use.
                </p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-6">What Makes Our Training Different</h2>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-indigo-500/10 to-gray-800 rounded-xl p-6 ring-1 ring-indigo-500/20">
                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm font-bold">1</span>
                      Customized to Your Business
                    </h3>
                    <p className="text-gray-300 ml-11">
                      We don&apos;t use generic scripts or one-size-fits-all content. Every program is built around your specific products, customers, and sales process. Your team will practice with scenarios they actually face.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-500/10 to-gray-800 rounded-xl p-6 ring-1 ring-indigo-500/20">
                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm font-bold">2</span>
                      Built on Memorable Frameworks
                    </h3>
                    <p className="text-gray-300 ml-11">
                      The C2 Frameworks are simple enough to remember but powerful enough to transform results. When your team can recall what they learned months later, that&apos;s when real change happens.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-500/10 to-gray-800 rounded-xl p-6 ring-1 ring-indigo-500/20">
                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm font-bold">3</span>
                      Hands-On Practice
                    </h3>
                    <p className="text-gray-300 ml-11">
                      Reading about selling isn&apos;t selling. Our training includes extensive role-playing, real-world scenarios, and immediate feedback so your team builds actual skills, not just knowledge.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-500/10 to-gray-800 rounded-xl p-6 ring-1 ring-indigo-500/20">
                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm font-bold">4</span>
                      Post-Training Reinforcement
                    </h3>
                    <p className="text-gray-300 ml-11">
                      Training doesn&apos;t end when the session does. We provide follow-up resources, coaching calls, and reinforcement materials to ensure the learning sticks long after we leave.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mt-12 mb-6">The C2 Frameworks</h2>
                <p className="text-gray-300 mb-6">
                  Every training program incorporates our three core frameworks, adapted to your specific business context:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Link
                    href="/grandmother-philosophy"
                    className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10 ring-1 ring-gray-700 hover:ring-indigo-500/30 transition-all duration-200"
                  >
                    <h4 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">Grandmother Philosophy™</h4>
                    <p className="text-gray-400 text-sm mt-1">Building trust through genuine care</p>
                  </Link>
                  <Link
                    href="/animal-selling"
                    className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10 ring-1 ring-gray-700 hover:ring-indigo-500/30 transition-all duration-200"
                  >
                    <h4 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">Animal Selling™</h4>
                    <p className="text-gray-400 text-sm mt-1">Adapting to customer styles</p>
                  </Link>
                  <Link
                    href="/exspeaktations"
                    className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10 ring-1 ring-gray-700 hover:ring-indigo-500/30 transition-all duration-200"
                  >
                    <h4 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">Exspeaktations™</h4>
                    <p className="text-gray-400 text-sm mt-1">The power of intentional language</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Program Details */}
            <div className="mt-12 lg:mt-0">
              <div className="bg-gradient-to-br from-indigo-500/10 to-gray-800 rounded-2xl p-8 sticky top-24 ring-1 ring-indigo-500/20">
                <h3 className="font-semibold text-white text-xl mb-6">Program Details</h3>
                <dl className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <dt className="text-gray-400">Duration</dt>
                    <dd className="text-white font-semibold">1-5 days</dd>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <dt className="text-gray-400">Format</dt>
                    <dd className="text-white font-semibold">In-person, virtual, or hybrid</dd>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <dt className="text-gray-400">Team Size</dt>
                    <dd className="text-white font-semibold">10-500+ participants</dd>
                  </div>
                  <div className="flex justify-between items-center">
                    <dt className="text-gray-400">Best For</dt>
                    <dd className="text-white font-semibold text-right text-sm">Sales teams, retail associates</dd>
                  </div>
                </dl>
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-200"
                  >
                    Request a Custom Proposal
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
              href="/speaking"
              className="group bg-gradient-to-br from-orange-500/10 to-gray-800 rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg ring-1 ring-orange-500/20 transition-all duration-200"
            >
              <h3 className="font-semibold text-white text-lg group-hover:text-orange-400 transition-colors">Keynote Presentations</h3>
              <p className="text-gray-400 mt-2">High-energy presentations that challenge teams to think differently</p>
            </Link>
            <Link
              href="/services/coaching"
              className="group bg-gradient-to-br from-green-500/10 to-gray-800 rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg ring-1 ring-green-500/20 transition-all duration-200"
            >
              <h3 className="font-semibold text-white text-lg group-hover:text-green-400 transition-colors">Coaching & Webinars</h3>
              <p className="text-gray-400 mt-2">Ongoing development through live coaching and interactive sessions</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-500 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to transform your team?</h2>
          <p className="mt-4 text-xl text-indigo-100">
            Let&apos;s discuss how custom training can help your team sell smarter.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-indigo-600 hover:bg-indigo-50 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
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
