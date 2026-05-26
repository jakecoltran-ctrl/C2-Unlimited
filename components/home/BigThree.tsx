import Link from 'next/link';
import { bigThree } from '@/lib/data';

const bigThreeLinks = [
  '/grandmother-philosophy',
  '/animal-selling',
  '/exspeaktations',
];

export default function BigThree() {
  return (
    <section className="bg-gradient-to-b from-gray-950 to-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">The C2 Frameworks</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Three memorable frameworks that form the foundation of everything we teach.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {bigThree.map((item, index) => (
            <Link
              key={index}
              href={bigThreeLinks[index]}
              className="group relative border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="absolute -top-4 left-8 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 mt-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
              <p className="text-blue-400 text-sm mb-4">{item.tagline}</p>
              <p className="text-gray-300 italic">{item.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-500 group-hover:text-blue-400">
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
  );
}
