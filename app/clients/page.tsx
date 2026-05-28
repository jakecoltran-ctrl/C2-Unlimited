import Link from 'next/link';
import Image from 'next/image';
import { clients, caseStudies, testimonials } from '@/lib/data';
import LiteYouTube from '@/components/ui/LiteYouTube';

export default function ClientsPage() {
  return (
    <div className="bg-gray-950">
      {/* Hero */}
      <section className="bg-gray-900 py-24 border-b-4 border-blue-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-4">Success Stories</p>
          <h1 className="text-5xl font-bold text-white">Clients & Results</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            We're proud to partner with industry leaders who trust us to transform their teams.
          </p>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-16">Companies We&apos;ve Worked With</h2>
          <div className="grid grid-cols-2 gap-x-12 gap-y-12 sm:grid-cols-3 md:grid-cols-5">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center justify-center h-20 px-4 opacity-70 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={180}
                    height={80}
                    className="object-contain"
                    style={{
                      maxWidth: `${160 * (client.scale || 1)}px`,
                      maxHeight: `${80 * (client.scale || 1)}px`,
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-white text-center mb-6">Watch: C2 in Action</h3>
          <LiteYouTube
            videoId="VDMAgB5CzZ8"
            title="C2 Coaching & Training - Client Results"
          />
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Success Stories</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              See how we&apos;ve helped leading companies transform their sales teams and drive measurable results.
            </p>
          </div>

          {/* The Home Depot */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden mb-12">
            {/* Hero Image */}
            <div className="relative h-64 lg:h-80 overflow-hidden">
              <Image
                src="/images/home-depot-team.png"
                alt="C2 team with Home Depot associates"
                fill
                className="object-cover scale-150" style={{ objectPosition: '30% 40%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-800/40 to-transparent" />
              <div className="absolute bottom-6 left-8 lg:left-12">
                <p className="text-orange-400 font-semibold uppercase tracking-wide text-sm">The Home Depot</p>
                <h3 className="mt-1 text-2xl lg:text-3xl font-bold text-white">D23 Sales Training Program</h3>
              </div>
            </div>
            {/* Content */}
            <div className="p-8 lg:p-12 pt-6 lg:pt-8">
              <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                <div className="lg:col-span-2">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    C2 Coaching & Training developed and facilitated a training program across 77 events for The Home Depot. With over 10,000 Associates trained, in 45 cities in 28 states, C2 was able to implement a new selling culture into multiple specialty departments and improved customer engagement and increased measure requests on average of 25%.
                  </p>
                </div>
                <div className="mt-8 lg:mt-0">
                  <div className="bg-gray-900 rounded-xl p-6">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-orange-500">$100M+</div>
                      <p className="mt-2 text-gray-400">in additional sales</p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-700 grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-white">10,000+</div>
                        <p className="text-sm text-gray-400">Associates Trained</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">77</div>
                        <p className="text-sm text-gray-400">Events</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">45</div>
                        <p className="text-sm text-gray-400">Cities</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">25%</div>
                        <p className="text-sm text-gray-400">Increase in Measures</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Keller Interiors */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden mb-12">
            {/* Hero Image */}
            <div className="relative h-64 lg:h-80">
              <Image
                src="/images/keller-team.jpg"
                alt="C2 team with Keller Interiors managers"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-800/40 to-transparent" />
              <div className="absolute bottom-6 left-8 lg:left-12">
                <p className="text-yellow-400 font-semibold uppercase tracking-wide text-sm">Keller Interiors</p>
                <h3 className="mt-1 text-2xl lg:text-3xl font-bold text-white">Coaching Program</h3>
              </div>
            </div>
            {/* Content */}
            <div className="p-8 lg:p-12 pt-6 lg:pt-8">
              <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                <div className="lg:col-span-2">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    C2 Coaching & Training conducts weekly coaching calls with 30+ Installation Managers company wide for Keller Interiors. Keller is one of the largest installation service providers for Lowe&apos;s Home Improvement company nationally and is a leader in innovation including the Keller Sales Academy for teaching sales and customer service in 250+ stores across 11 states, original adopter of Red Vest Selling, and also coaching their people as part of their Investing in their People initiative supporting their company core values.
                  </p>
                </div>
                <div className="mt-8 lg:mt-0">
                  <div className="bg-gray-900 rounded-xl p-6">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="col-span-2 pb-4 border-b border-gray-700">
                        <div className="text-4xl font-bold text-yellow-500">1,800+</div>
                        <p className="mt-1 text-gray-400">Weekly Coaching Calls</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">400+</div>
                        <p className="text-sm text-gray-400">Stores</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">14</div>
                        <p className="text-sm text-gray-400">States</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Louver Shop */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden mb-12">
            {/* Hero Image */}
            <div className="relative h-64 lg:h-80 overflow-hidden">
              <Image
                src="/images/louver-shop.png"
                alt="Louver Shop plantation shutters in a beautiful home"
                fill
                className="object-cover scale-[1.75]" style={{ objectPosition: 'center center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-800/40 to-transparent" />
              <div className="absolute bottom-6 left-8 lg:left-12">
                <p className="text-blue-400 font-semibold uppercase tracking-wide text-sm">The Louver Shop</p>
                <h3 className="mt-1 text-2xl lg:text-3xl font-bold text-white">The Louver Shop Selling Way</h3>
              </div>
            </div>
            {/* Content */}
            <div className="p-8 lg:p-12 pt-6 lg:pt-8">
              <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                <div className="lg:col-span-2">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    C2 Coaching & Training developed the entire sales training program for Louver Shop Sales Reps when they cross the threshold into the customers home. The Louver Shop is the oldest plantation shutter manufacturer in the US and the Louver Shop Selling Way is a two week program that teaches our C2 proprietary, proven in-home selling system process to veteran and newly hired reps.
                  </p>
                </div>
                <div className="mt-8 lg:mt-0">
                  <div className="bg-gray-900 rounded-xl p-6">
                    <div className="grid grid-cols-1 gap-4 text-center">
                      <div className="pb-4 border-b border-gray-700">
                        <div className="text-4xl font-bold text-blue-500">2 Week</div>
                        <p className="mt-1 text-gray-400">Training Program</p>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white">Oldest Plantation Shutter</div>
                        <p className="text-sm text-gray-400">Manufacturer in the US</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Red Vest Selling */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden mb-12">
            {/* Hero Image */}
            <div className="relative h-64 lg:h-80 overflow-hidden">
              <Image
                src="/images/red-vest-selling.png"
                alt="Red Vest Selling program materials and training resources"
                fill
                className="object-cover scale-[1.15]" style={{ objectPosition: 'center center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-800/40 to-transparent" />
              <div className="absolute bottom-6 left-8 lg:left-12">
                <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">Lowe&apos;s</p>
                <h3 className="mt-1 text-2xl lg:text-3xl font-bold text-white">Red Vest Selling Program</h3>
              </div>
            </div>
            {/* Content */}
            <div className="p-8 lg:p-12 pt-6 lg:pt-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-2">
                <p className="text-gray-300 text-lg leading-relaxed">
                  The Red Vest Selling Program was created to strengthen Lowe&apos;s associates&apos; customer service and selling skills, with a special focus on increasing flooring details.
                </p>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  Its roots go back to 2018, when C2 Coaching & Training was hired by a flooring provider in the Chicago and St. Louis markets to train Home Depot associates. The sharp sales growth in those regions quickly caught the attention of THD leadership, leading Dave Hronchek, then National Installation Flooring Merchant, to invite C2 to present at corporate headquarters. Impressed by the approach, The Home Depot launched a nationwide initiative. Between 2019 and early 2020, C2 delivered more than 80 live events and trained over 10,000 associates—just before the onset of the COVID-19 pandemic.
                </p>
                <ul className="mt-6 space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    13+ training modules (viewed more than 25,000 times by Lowe&apos;s associates)
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Store handouts, learning assessments, and certificates of completion
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Red Vest patches for recognition
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Trainer guides, trainer videos, and ongoing content upgrades
                  </li>
                </ul>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="bg-gray-900 rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="col-span-2 pb-4 border-b border-gray-700">
                      <div className="text-4xl font-bold text-blue-600">166,456</div>
                      <p className="mt-1 text-gray-400">Minutes Watched</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">1,689</div>
                      <p className="text-sm text-gray-400">Graduates</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">3,653</div>
                      <p className="text-sm text-gray-400">Signups</p>
                    </div>
                    <div className="col-span-2 pt-4 border-t border-gray-700">
                      <div className="text-2xl font-bold text-white">25,458</div>
                      <p className="text-sm text-gray-400">Modules Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* RCB Roofing */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden mb-12">
            {/* Hero Image */}
            <div className="relative h-64 lg:h-80">
              <Image
                src="/images/rcb-roofing.png"
                alt="RCB Roofing University"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-800/40 to-transparent" />
              <div className="absolute bottom-6 left-8 lg:left-12">
                <p className="text-sky-400 font-semibold uppercase tracking-wide text-sm">RCB Roofing</p>
                <h3 className="mt-1 text-2xl lg:text-3xl font-bold text-white">RCB Roofing University</h3>
              </div>
            </div>
            {/* Content */}
            <div className="p-8 lg:p-12 pt-6 lg:pt-8">
              <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                <div className="lg:col-span-2">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    C2 Coaching & Training developed for RCB Roofing, the nation&apos;s largest SF&I roofing provider for Lowe&apos;s, their Selling System and RCB University. When followed, sales reps have a sales process to contact their leads, set appointments, make in-home presentations, ask for orders, overcome objections, and close sales. When the RCB Selling System is followed, it makes it easier for managers to coach and train.
                  </p>
                </div>
                <div className="mt-8 lg:mt-0">
                  <div className="bg-gray-900 rounded-xl p-6">
                    <div className="grid grid-cols-1 gap-4 text-center">
                      <div className="pb-4 border-b border-gray-700">
                        <div className="text-2xl font-bold text-sky-400">Nation&apos;s Largest</div>
                        <p className="mt-1 text-gray-400">SF&I Roofing Provider for Lowe&apos;s</p>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white">Complete Selling System</div>
                        <p className="text-sm text-gray-400">From lead contact to close</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Repipe */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden mb-12">
            {/* Hero Image */}
            <div className="relative h-64 lg:h-80">
              <Image
                src="/images/repipe.png"
                alt="Repipe One-Stop Process"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-800/40 to-transparent" />
              <div className="absolute bottom-6 left-8 lg:left-12">
                <p className="text-cyan-400 font-semibold uppercase tracking-wide text-sm">Repipe — National Renovations</p>
                <h3 className="mt-1 text-2xl lg:text-3xl font-bold text-white">Repipe Selling Way Program</h3>
              </div>
            </div>
            {/* Content */}
            <div className="p-8 lg:p-12 pt-6 lg:pt-8">
              <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                <div className="lg:col-span-2">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    C2 Coaching & Training has developed the Repipe Selling Way for Repipe — National Renovations, the nation&apos;s largest repiping company in the US. With over 80,000 completed repipe projects in over a dozen states, they are the leader in both residential and commercial projects. C2 is developing their selling systems to be used by their sales reps as well as their call center manuals, objections manual, and SOP manuals for their CRM.
                  </p>
                </div>
                <div className="mt-8 lg:mt-0">
                  <div className="bg-gray-900 rounded-xl p-6">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="col-span-2 pb-4 border-b border-gray-700">
                        <div className="text-4xl font-bold text-cyan-400">80,000+</div>
                        <p className="mt-1 text-gray-400">Completed Projects</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">12+</div>
                        <p className="text-sm text-gray-400">States</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">#1</div>
                        <p className="text-sm text-gray-400">Repiping Company in US</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-semibold uppercase tracking-wide text-sm mb-4">Testimonials</p>
            <h2 className="text-3xl font-bold text-white">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => {
              const colors = [
                { bg: 'from-orange-500/20 to-gray-800', border: 'border-orange-500', quote: 'text-orange-400' },
                { bg: 'from-blue-500/20 to-gray-800', border: 'border-blue-500', quote: 'text-blue-400' },
                { bg: 'from-green-500/20 to-gray-800', border: 'border-green-500', quote: 'text-green-400' },
              ];
              const color = colors[index % colors.length];
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${color.bg} rounded-2xl p-8 ring-1 ring-white/10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
                >
                  <svg className={`h-10 w-10 ${color.quote} mb-6 opacity-80`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <blockquote className="text-gray-300 leading-relaxed text-lg">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className={`mt-8 pt-6 border-t ${color.border} border-opacity-30`}>
                    <p className="font-semibold text-white text-lg">{testimonial.author}</p>
                    <p className={`${color.quote} text-sm font-medium`}>{testimonial.company}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/images/logo.png"
            alt="C2 Coaching & Training"
            width={100}
            height={40}
            className="h-12 w-auto mx-auto mb-8 opacity-60"
          />
          <h2 className="text-3xl font-bold text-white">Join Our Growing List of Success Stories</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help transform your team.
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
