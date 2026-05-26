import Image from 'next/image';
import { clients } from '@/lib/data';

export default function ClientLogos() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wide mb-16">
          Trusted by industry leaders
        </p>
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
  );
}
