import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative"
            >
              <svg className="absolute -top-4 -left-2 h-16 w-16 text-blue-500/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="relative text-lg text-gray-300 leading-relaxed pl-6 border-l-2 border-blue-500">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 pl-6">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-blue-400 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
