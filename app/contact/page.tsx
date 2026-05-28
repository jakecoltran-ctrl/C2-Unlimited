import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="bg-gray-950">
      {/* Hero */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Image
            src="/images/logo.png"
            alt="C2 Coaching & Training"
            width={100}
            height={40}
            className="h-12 w-auto mb-6 opacity-70"
          />
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl">
            Ready to transform your team? Let&apos;s start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-300">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 border"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 border"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 border"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 border"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 border"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-300">
                    I&apos;m interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 border"
                  >
                    <option value="">Select an option</option>
                    <option value="training">Custom Training Programs</option>
                    <option value="coaching">Leadership Coaching</option>
                    <option value="speaking">Keynote Speaking</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="team-size" className="block text-sm font-medium text-gray-300">
                    Team Size
                  </label>
                  <select
                    id="team-size"
                    name="team-size"
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 border"
                  >
                    <option value="">Select team size</option>
                    <option value="1-10">1-10 people</option>
                    <option value="11-50">11-50 people</option>
                    <option value="51-200">51-200 people</option>
                    <option value="201-500">201-500 people</option>
                    <option value="500+">500+ people</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 border"
                    placeholder="Tell us about your goals and challenges..."
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="mt-16 lg:mt-0">
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-6">What to Expect</h3>
                <ol className="space-y-4">
                  {[
                    'We\'ll respond within 24 business hours',
                    'Schedule a free 30-minute discovery call',
                    'Discuss your team\'s goals and challenges',
                    'Receive a customized proposal',
                  ].map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold text-sm">
                        {index + 1}
                      </span>
                      <span className="ml-4 text-gray-300">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-8 bg-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Other Ways to Connect</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:chris@chriscoltran.com" className="text-blue-500 hover:text-blue-400">
                      chris@chriscoltran.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a href="tel:+17704059041" className="text-blue-500 hover:text-blue-400">
                      (770) 405-9041
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Follow Us</p>
                    <div className="flex space-x-4 mt-2">
                      <a href="#" className="text-gray-500 hover:text-gray-300">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-gray-300">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-gray-300">
                        <span className="sr-only">YouTube</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
