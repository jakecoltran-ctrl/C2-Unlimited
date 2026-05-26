import Link from 'next/link';
import Image from 'next/image';
import LiteYouTube from '@/components/ui/LiteYouTube';

export default function AnimalSellingPage() {
  return (
    <div className="bg-gray-950">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-900/30 via-gray-900 to-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 font-semibold tracking-wide uppercase text-sm mb-4">
            The C2 Frameworks
          </p>
          <h1 className="text-5xl font-bold text-white">Animal Selling™</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Born from decades of sales research and real-world experience, Animal Selling™ changes the way teams understand themselves and connect with their customers.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-invert">
              <blockquote className="text-2xl text-white italic border-l-4 border-blue-500 pl-6 my-8">
                'Sell the way Customers want to buy.'
              </blockquote>

              {/* Video */}
              <div className="my-12">
                <h3 className="text-xl font-bold text-white text-center mb-4">Watch: Animal Selling™</h3>
                <LiteYouTube
                  videoId="HpMOWp2kDG0"
                  title="Animal Selling™ - Chris Coltran"
                />
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Origin Story</h2>
              <p className="text-gray-300 mb-6">
                Animal Selling™ was created by C2 Unlimited, LLC as a straightforward, easy-to-grasp framework that helps sales professionals internalize one of the most important truths in the profession: <strong className="text-white">Sell to people the way THEY want to buy — not the way you want to sell.</strong>
              </p>

              <div className="bg-blue-600 rounded-xl p-6 mb-6">
                <p className="text-white text-lg font-semibold text-center mb-2">The Customer Preference Principle™</p>
                <p className="text-blue-100 text-center">Know your animal. Spot their animal. Adapt your approach. Close their way.</p>
              </div>

              <p className="text-gray-300 mb-6">
                The framework gives salespeople a practical way to:
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>Pinpoint their own natural selling style</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>Read the behavioral cues of the customer in front of them</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>Adjust on the fly to build connection and trust</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>Close more consistently by matching how the customer prefers to decide</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Tested in the Real World</h2>
              <p className="text-gray-300 mb-6">
                Since 2008, these ideas have been rolled out at scale to more than <strong className="text-white">10,000 sales professionals</strong> across North America through programs designed and led by C2 Unlimited, LLC.
              </p>
              <p className="text-gray-300 mb-6">
                Animal Selling™ has been delivered in:
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="text-white font-semibold">Live Workshops</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="text-white font-semibold">In-Store Retail Training</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="text-white font-semibold">In-Home Sales Settings</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="text-white font-semibold">Corporate Leadership Sessions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                That includes large-scale training partnerships with The Home Depot, one of the biggest retailers in the world. Across these settings, the framework has helped associates read customer behavior in the moment, feel more confident during conversations, build stronger rapport on the sales floor, and improve the overall buying experience.
              </p>
              <p className="text-gray-300 mb-6">
                This isn&apos;t classroom theory — it&apos;s a system built, stress-tested, and sharpened by a company that has spent years training sales professionals across a wide range of industries.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Four Styles</h2>
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">The Lion</h3>
                  <p className="text-gray-300">
                    Direct, decisive, and results-focused. Lions want you to get to the point quickly. They value efficiency and confidence. Don&apos;t waste their time with small talk—give them the bottom line.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">The Otter</h3>
                  <p className="text-gray-300">
                    Enthusiastic, social, and relationship-driven. Otters want to connect with you as a person. They enjoy conversation and make decisions based on how they feel about you and the experience.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">The Golden Retriever</h3>
                  <p className="text-gray-300">
                    Patient, loyal, and harmony-seeking. Golden Retrievers don&apos;t like pressure. They want to feel comfortable and may need reassurance. Give them time and make sure everyone involved is on board.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">The Beaver</h3>
                  <p className="text-gray-300">
                    Analytical, detail-oriented, and cautious. Beavers want data, specs, and proof. They&apos;ll ask lots of questions and need time to process. Come prepared with facts and don&apos;t rush them.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Philosophy</h2>
              <p className="text-gray-300 mb-6">
                The Golden Rule says treat others the way you want to be treated. Animal Selling™ flips that: <strong className="text-white">treat customers the way they want to be treated.</strong> That single shift is what separates good intentions from closed deals.
              </p>
              <p className="text-gray-300 mb-6">
                Most salespeople instinctively communicate the way they themselves like to be communicated with — emphasizing what matters to them, moving at their preferred pace, and closing the way they&apos;d want to be closed. It feels natural. It&apos;s also the reason so many deals slip through the cracks.
              </p>
              <p className="text-gray-300 mb-6">
                The reality is that customers buy based on what matters to them. A data-driven buyer won&apos;t be swayed by your enthusiasm. A relationship-focused customer won&apos;t respond to pressure. A decisive executive doesn&apos;t want to wade through every detail.
              </p>
              <p className="text-gray-300 mb-6">
                Animal Selling™ helps you read how your customer wants to be treated and adjust in real time. It teaches you to slow down, recognize how the person across from you thinks and decides, and tune your approach before you ever try to close.
              </p>
              <p className="text-gray-300 mb-6">
                When you serve customers the way they want to be served, you build trust faster, reduce friction, and close more deals — not through pressure, but through alignment.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Science Behind It</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Behavioral Psychology</h3>
                  <p className="text-gray-300">
                    The framework draws on decades of research into how people communicate, make decisions, and respond to different interaction styles in buying situations.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Two Key Dimensions</h3>
                  <p className="text-gray-300">
                    Buying behavior clusters around two axes: task-oriented versus people-oriented, and fast-paced versus methodical. Our four animals represent the distinct styles that emerge from those combinations.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Built Specifically for Sales</h3>
                  <p className="text-gray-300">
                    Unlike generic behavioral assessments, every piece of Animal Selling™ — from how we measure style to the guidance we provide — is designed for sales conversations.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Adaptive Selling</h3>
                  <p className="text-gray-300">
                    Research consistently shows that salespeople who adjust their style to match the customer close more deals. Animal Selling™ makes that adjustment intuitive.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Why It Works</h2>
              <p className="text-gray-300 mb-6">
                Animal Selling™ is a behavior-based sales system that teaches professionals to read a customer&apos;s preferred buying style and adjust their approach to match it on the spot.
              </p>
              <p className="text-gray-300 mb-6">
                Because in the real world:
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>Salespeople don&apos;t have time to wade through complex theory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>Customers don&apos;t tell you how they want to be sold to</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>And connection has to happen quickly</span>
                </li>
              </ul>
              <p className="text-gray-300 mb-6">
                Animal Selling™ closes that gap. It turns awareness into action. It turns concepts into behavior. And most importantly, it helps salespeople meet customers exactly where they are.
              </p>

              {/* Animal Selling Website */}
              <div className="bg-gray-800 rounded-2xl p-8 mt-12">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/images/animal-selling-logo.png"
                    alt="Animal Selling"
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                  <h3 className="text-2xl font-bold text-white">Discover Your Animal Style</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Take a quick online quiz, discover your primary and secondary animal right away, learn how to identify a customer&apos;s animal in real time, get clear actionable tactics for adapting your approach, and put it to work in your very next conversation.
                </p>
                <p className="text-gray-300 mb-6">
                  This lets organizations scale what C2 has been doing for years — only faster, more consistently, and with results you can feel immediately.
                </p>
                <a
                  href="https://animalselling.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  Visit AnimalSelling.com
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Other Big Three */}
            <div className="mt-16 pt-12 border-t border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-6">Explore the Other Frameworks</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/grandmother-philosophy"
                  className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  <h4 className="font-semibold text-white">The Grandmother Philosophy™</h4>
                  <p className="text-gray-400 text-sm mt-1">Build trust through genuine care</p>
                </Link>
                <Link
                  href="/exspeaktations"
                  className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  <h4 className="font-semibold text-white">Exspeaktations™</h4>
                  <p className="text-gray-400 text-sm mt-1">How words shape expectations and performance</p>
                </Link>
              </div>
            </div>
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
          <h2 className="text-3xl font-bold text-white">Ready to transform how your team connects with customers?</h2>
          <p className="mt-4 text-xl text-blue-100">
            Let&apos;s talk about bringing Animal Selling to your organization.
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
