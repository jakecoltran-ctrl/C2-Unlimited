import Link from 'next/link';
import { chrisBio } from '@/lib/data';

export default function ChrisBio() {
  return (
    <section className="bg-gray-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image placeholder */}
          <div className="mb-10 lg:mb-0">
            <div className="aspect-[4/5] rounded-2xl bg-gray-800 overflow-hidden">
              {/* Replace with actual image */}
              <div className="w-full h-full flex items-center justify-center text-gray-600">
                <svg className="h-32 w-32" fill="none" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Meet {chrisBio.name}
            </h2>
            <p className="text-lg text-blue-500 mt-1">
              {chrisBio.title}
            </p>
            <p className="mt-6 text-gray-300 leading-relaxed">
              {chrisBio.shortBio}
            </p>
            <blockquote className="mt-8 border-l-4 border-blue-500 pl-6 italic text-gray-400">
              {chrisBio.quote}
            </blockquote>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
              >
                Learn more about Chris
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
