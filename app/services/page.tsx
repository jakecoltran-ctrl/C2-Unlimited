import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/data';

const serviceDetails = [
  {
    slug: 'training',
    title: 'Custom Sales Training',
    description: 'We build sales training programs around your company, your people, your process, your customers, and your language. Our C2 Frameworks make training memorable and actionable.',
    features: [
      'Customized curriculum built around your specific business',
      'Built on our C2 Frameworks: Grandmother Philosophy™, Animal Selling™, and Exspeaktations™',
      'Hands-on role-playing and real-world scenarios',
      'Post-training reinforcement and follow-up',
      'Designed to stick—not be forgotten after the session ends',
    ],
    duration: '1-10 days depending on scope',
    format: 'In-person, virtual, or hybrid',
    teamSize: '10-500+ participants',
  },
  {
    slug: 'speaking',
    title: 'Keynote Presentations',
    description: 'Engaging, high-energy presentations that challenge teams to think differently about sales, communication, and leadership.',
    features: [
      'Dynamic keynotes for sales meetings and conferences',
      'Interactive presentations that engage audiences',
      'Customized content for your industry and team',
      'Memorable takeaways your team can immediately apply',
      'Perfect for kickoffs, retreats, and corporate events',
    ],
    duration: '45-90 minutes',
    format: 'In-person',
    teamSize: '50-1,000+ attendees',
  },
  {
    slug: 'coaching',
    title: 'Coaching & Webinars',
    description: 'Ongoing development through live coaching calls and webinars that reinforce learning and drive accountability.',
    features: [
      'Regular live coaching calls',
      'Interactive webinars on key topics',
      'Reinforcement of C2 Frameworks',
      'Accountability and progress tracking',
      'Flexible scheduling to fit your team',
    ],
    duration: 'Ongoing engagement',
    format: 'Virtual sessions',
    teamSize: 'Individual to teams of 100+',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-950">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-gray-900 to-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white">Our Services</h1>
          <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto">
            Custom sales training, keynotes, coaching calls, and webinars built around memorable frameworks that stick.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {serviceDetails.map((service, index) => {
              const isKeynote = service.slug === 'speaking';
              const isCoaching = service.slug === 'coaching';

              // Color classes for each service
              const getColorClasses = () => {
                if (isKeynote) return {
                  hover: 'group-hover:text-orange-400',
                  check: 'text-orange-500',
                  button: 'bg-orange-500 hover:bg-orange-400 hover:shadow-orange-500/25',
                  card: 'hover:shadow-orange-500/10 ring-1 ring-orange-500/20',
                  link: 'text-orange-400'
                };
                if (isCoaching) return {
                  hover: 'group-hover:text-green-400',
                  check: 'text-green-500',
                  button: 'bg-green-600 hover:bg-green-500 hover:shadow-green-500/25',
                  card: 'hover:shadow-green-500/10 ring-1 ring-green-500/20',
                  link: 'text-green-400'
                };
                return {
                  hover: 'group-hover:text-indigo-400',
                  check: 'text-indigo-500',
                  button: 'bg-indigo-600 hover:bg-indigo-500 hover:shadow-indigo-500/25',
                  card: 'hover:shadow-indigo-500/10 ring-1 ring-indigo-500/20',
                  link: 'text-indigo-400'
                };
              };
              const colors = getColorClasses();

              return (
                <div
                  key={service.slug}
                  className={`lg:grid lg:grid-cols-2 lg:gap-16 ${
                    index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <Link href={service.slug === 'speaking' ? '/speaking' : `/services/${service.slug}`} className="group">
                      <h2 className={`text-3xl font-bold text-white transition-colors ${colors.hover}`}>{service.title}</h2>
                    </Link>
                    <p className="mt-4 text-lg text-gray-400">{service.description}</p>

                    <ul className="mt-8 space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className={`h-6 w-6 flex-shrink-0 ${colors.check}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          <span className="ml-3 text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={service.slug === 'speaking' ? '/speaking' : `/services/${service.slug}`}
                      className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 ${colors.button}`}
                    >
                      Learn More
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>

                  <div className={`mt-10 lg:mt-0 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <Link
                      href={service.slug === 'speaking' ? '/speaking' : `/services/${service.slug}`}
                      className={`block bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${colors.card}`}
                    >
                      <h3 className="font-semibold text-white mb-6">Program Details</h3>
                      <dl className="space-y-4">
                        <div>
                          <dt className="text-sm text-gray-400">Duration</dt>
                          <dd className="text-white font-medium">{service.duration}</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-gray-400">Format</dt>
                          <dd className="text-white font-medium">{service.format}</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-gray-400">Team Size</dt>
                          <dd className="text-white font-medium">{service.teamSize}</dd>
                        </div>
                      </dl>
                      <span className={`mt-6 inline-flex items-center text-sm font-semibold ${colors.link}`}>
                        View full details
                        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/images/logo.png"
            alt="C2 Coaching & Training"
            width={80}
            height={32}
            className="h-10 w-auto mx-auto mb-6 opacity-80"
          />
          <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
          <p className="mt-4 text-xl text-blue-100">
            Let&apos;s discuss how we can customize a program for your team.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
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
