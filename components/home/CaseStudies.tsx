import Link from 'next/link';
import { caseStudies } from '@/lib/data';

export default function CaseStudies() {
  return (
    <section className="bg-gray-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Proven Results</h2>
          <p className="mt-4 text-lg text-gray-400">
            Real outcomes from real partnerships
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group flex flex-col h-full"
            >
              <div className="bg-blue-600 rounded-t-2xl p-6 text-center">
                <div className="text-4xl font-bold text-white">
                  {study.metric}
                </div>
                <div className="text-sm text-blue-100">
                  {study.metricLabel}
                </div>
              </div>
              <div className="bg-gray-800 rounded-b-2xl p-6 flex-1">
                <p className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
                  {study.client}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {study.headline}
                </h3>
                <p className="mt-2 text-gray-400 text-sm">
                  {study.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/clients"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
          >
            View all case studies
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
