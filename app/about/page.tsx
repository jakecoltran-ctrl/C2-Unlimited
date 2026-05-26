import Link from 'next/link';
import Image from 'next/image';
import { chrisBio, bigThree, whyC2 } from '@/lib/data';
import LiteYouTube from '@/components/ui/LiteYouTube';

const teamMembers = [
  {
    name: 'Chris Coltran',
    title: 'Founder & Lead Trainer',
    image: '/images/team/chris.png',
  },
  {
    name: 'Anna Coltran',
    title: 'Co-Founder & Art & Design Director',
    image: '/images/team/anna.jpg',
  },
  {
    name: 'Dawson Coltran',
    title: 'Sales Director & Project Manager',
    image: '/images/team/dawson.jpg',
  },
  {
    name: 'Jake Coltran',
    title: 'Marketing Director & Project Manager',
    image: '/images/team/jake.jpg',
  },
  {
    name: 'Todd T.',
    title: 'Learning Consultant',
    image: '/images/team/todd.png',
  },
  {
    name: 'Katie C.',
    title: 'Project Manager',
    image: '/images/team/katie.png',
  },
  {
    name: 'Team Member',
    title: 'Title',
    image: null,
  },
  {
    name: 'Team Member',
    title: 'Title',
    image: null,
  },
];

const bigThreeLinks = [
  '/grandmother-philosophy',
  '/animal-selling',
  '/exspeaktations',
];

export default function AboutPage() {
  return (
    <div className="bg-gray-950">
      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-green-400 font-semibold tracking-wide uppercase text-sm mb-4">Since {chrisBio.founded}</p>
          <h1 className="text-5xl font-bold text-white">About C2</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            More than two decades of experience helping sales teams communicate better, create stronger customer experiences, and increase results.
          </p>
        </div>
      </section>

      {/* Chris Bio */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            {/* Image */}
            <div>
              <div className="aspect-[4/5] rounded-2xl bg-gray-800 overflow-hidden sticky top-24 relative">
                <Image
                  src="/images/chris-coltran.jpg"
                  alt="Chris Coltran - Founder & Lead Trainer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="mt-10 lg:mt-0">
              <h2 className="text-3xl font-bold text-white">Meet {chrisBio.name}</h2>
              <p className="text-lg text-blue-500 mt-1">{chrisBio.title}</p>

              <div className="mt-8 prose prose-lg text-gray-300">
                <p>
                  {chrisBio.shortBio}
                </p>
                <p>
                  Chris founded C2 Unlimited with a simple belief: that every sales interaction is an opportunity
                  to create genuine value for customers. This philosophy has guided his work with some of the
                  largest home improvement retailers in the country.
                </p>
                <p>
                  His training programs have reached thousands of associates, managers, and executives, helping
                  them develop the skills and mindset needed to excel in today&apos;s competitive retail environment.
                </p>
              </div>

              <blockquote className="mt-8 border-l-4 border-blue-500 pl-6 italic text-gray-400 text-xl">
                {chrisBio.quote}
              </blockquote>

              <div className="mt-12">
                <h3 className="text-xl font-semibold text-white mb-4">Credentials & Experience</h3>
                <ul className="space-y-3">
                  {[
                    '20+ years in home improvement retail industry',
                    'Trained 20,000+ associates',
                    'Worked with Fortune 50 and Fortune 500 companies',
                    'Author',
                  ].map((credential, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="ml-3 text-gray-300">{credential}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-white text-center mb-6">Watch: The C2 Story</h3>
          <LiteYouTube
            videoId="sJQjcuX4eq8"
            title="Meet Chris Coltran - C2 Unlimited"
          />
        </div>
      </section>

      {/* The C2 Frameworks */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">The C2 Frameworks</h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            Three memorable frameworks that form the foundation of everything we teach.
          </p>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {bigThree.map((item, index) => (
              <Link
                key={index}
                href={bigThreeLinks[index]}
                className="group bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <p className="text-blue-400 text-sm mb-4">{item.tagline}</p>
                <p className="text-gray-400">{item.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-500">
                  Learn more
                  <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why C2 Works */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why C2 Works</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyC2.map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-blue-500 mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section id="team" className="bg-gray-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-4 text-center">
            The People Behind C2
          </p>
          <h2 className="text-3xl font-bold text-white text-center mb-4">Meet the Team</h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            A family-driven team passionate about helping sales professionals connect better with their customers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="aspect-square bg-gray-700 relative">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="h-24 w-24 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="mt-1 text-blue-400">{member.title}</p>
                </div>
              </div>
            ))}
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
          <h2 className="text-3xl font-bold text-white">Ready to Work Together?</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help transform your team.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              Contact Us
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/speaking"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-800 px-8 py-4 text-lg font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-gray-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              Book Chris to Speak
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
