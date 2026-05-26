import Link from 'next/link';
import Image from 'next/image';

export default function FinalCTA() {
  return (
    <section className="bg-blue-600 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <Image
          src="/images/logo.png"
          alt="C2 Coaching & Training"
          width={80}
          height={32}
          className="h-10 w-auto mx-auto mb-6 opacity-80"
        />
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Let&apos;s talk about your team
        </h2>
        <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
          Ready to transform your team&apos;s performance? Reach out and let&apos;s start a conversation.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
          >
            Contact Us
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
