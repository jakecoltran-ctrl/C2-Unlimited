import Link from 'next/link';
import { speakingTopics } from '@/lib/data';
import LiteYouTube from '@/components/ui/LiteYouTube';

const bigThreeLinks = [
  '/grandmother-philosophy',
  '/animal-selling',
  '/exspeaktations',
];

const whatToExpect = [
  {
    title: 'Customized Content',
    description: 'Every presentation is tailored to your industry, audience, and event goals.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: 'High-Energy Delivery',
    description: 'Engaging storytelling that captivates audiences from start to finish.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    title: 'Actionable Takeaways',
    description: 'Memorable frameworks your team can implement immediately.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: 'Pre-Event Consultation',
    description: 'We align on goals and key messages before taking the stage.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
];

const eventTypes = [
  'Sales Kickoffs',
  'National Conferences',
  'Leadership Retreats',
  'Industry Events',
];

export default function SpeakingPage() {
  return (
    <div className="bg-gray-950">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-gray-900 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <Link
            href="/services"
            className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-6 group"
          >
            <svg className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Services
          </Link>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-orange-500/20 ring-1 ring-orange-500/30">
                  <svg className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                  </svg>
                </div>
                <span className="text-orange-400 font-semibold tracking-wide uppercase text-sm">Keynote Speaking</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white">Presentations That Inspire Action</h1>
              <p className="mt-6 text-xl text-gray-300 max-w-xl">
                High-energy keynotes that challenge teams to think differently about sales, communication, and leadership. Over 20 years of experience. Trusted by Fortune 500 companies.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="#availability"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white hover:bg-orange-400 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-200"
                >
                  Book Chris to Speak
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a
                  href="#topics"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur px-8 py-4 text-lg font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-200"
                >
                  View Signature Talks
                </a>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
                <div className="relative">
                  <LiteYouTube
                    videoId="rdjxcgYRmek"
                    title="Chris Coltran - Keynote Speaking"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {eventTypes.map((type) => (
              <div
                key={type}
                className="bg-gray-800/50 backdrop-blur rounded-2xl p-6 text-center ring-1 ring-white/5 hover:ring-orange-500/30 hover:bg-gray-800 transition-all duration-300"
              >
                <p className="font-semibold text-white">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Topics */}
      <section id="topics" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-400 font-semibold tracking-wide uppercase text-sm mb-4">Signature Talks</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Three Frameworks That Transform Teams</h2>
            <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
              Memorable, actionable concepts your team will remember long after the event ends.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {speakingTopics.map((topic, index) => (
              <Link
                key={index}
                href={bigThreeLinks[index]}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-800/50 rounded-3xl p-8 ring-1 ring-white/10 hover:ring-orange-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-500/10 ring-1 ring-orange-500/30 text-orange-400 font-bold text-xl mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors mb-3">
                    {topic.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{topic.description}</p>
                  <div className="pt-6 border-t border-gray-700">
                    <p className="text-sm text-gray-500">
                      <span className="font-medium text-gray-400">Best for:</span> {topic.audience}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center text-sm font-semibold text-orange-400 group-hover:text-orange-300">
                    Learn more about this framework
                    <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="text-orange-400 font-semibold tracking-wide uppercase text-sm mb-4">What You Get</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">More Than Just a Speech</h2>
              <p className="text-xl text-gray-400 mb-8">
                Every keynote is a partnership. We work together to ensure your event achieves its goals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whatToExpect.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-gray-800 rounded-3xl p-8 ring-1 ring-white/10">
                <h3 className="font-semibold text-white text-xl mb-6">Program Details</h3>
                <dl className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <dt className="text-gray-400">Duration</dt>
                    <dd className="text-white font-semibold">45-90 minutes</dd>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <dt className="text-gray-400">Format</dt>
                    <dd className="text-white font-semibold">In-person</dd>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <dt className="text-gray-400">Audience Size</dt>
                    <dd className="text-white font-semibold">50-1,000+ attendees</dd>
                  </div>
                  <div className="flex justify-between items-center">
                    <dt className="text-gray-400">Travel</dt>
                    <dd className="text-white font-semibold">Nationwide</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="availability" className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-400 font-semibold tracking-wide uppercase text-sm mb-4">Get Started</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Check Availability</h2>
            <p className="mt-4 text-xl text-gray-400">
              Tell us about your event and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur rounded-3xl p-8 ring-1 ring-white/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block w-full rounded-xl bg-gray-900 border-0 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-orange-500 px-4 py-3"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full rounded-xl bg-gray-900 border-0 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-orange-500 px-4 py-3"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="event-date" className="block text-sm font-medium text-gray-300 mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="event-date"
                    name="event-date"
                    className="block w-full rounded-xl bg-gray-900 border-0 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-orange-500 px-4 py-3"
                  />
                </div>
                <div>
                  <label htmlFor="audience-size" className="block text-sm font-medium text-gray-300 mb-2">
                    Expected Audience
                  </label>
                  <select
                    id="audience-size"
                    name="audience-size"
                    className="block w-full rounded-xl bg-gray-900 border-0 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-orange-500 px-4 py-3"
                  >
                    <option value="">Select size</option>
                    <option value="under-50">Under 50</option>
                    <option value="50-100">50-100</option>
                    <option value="100-500">100-500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="event-type" className="block text-sm font-medium text-gray-300 mb-2">
                  Event Type
                </label>
                <select
                  id="event-type"
                  name="event-type"
                  className="block w-full rounded-xl bg-gray-900 border-0 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-orange-500 px-4 py-3"
                >
                  <option value="">Select event type</option>
                  <option value="sales-kickoff">Sales Kickoff</option>
                  <option value="conference">Conference / Convention</option>
                  <option value="leadership">Leadership Retreat</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Tell Us About Your Event
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-xl bg-gray-900 border-0 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-orange-500 px-4 py-3"
                  placeholder="What are your goals for this event? What topics are most relevant for your audience?"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-orange-500 px-6 py-4 text-lg font-semibold text-white hover:bg-orange-400 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-200"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to energize your next event?</h2>
          <p className="mt-4 text-xl text-orange-100 max-w-2xl mx-auto">
            Let&apos;s create an experience your team will talk about for years to come.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-orange-600 hover:bg-orange-50 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
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
