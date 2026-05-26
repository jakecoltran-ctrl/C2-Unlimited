const industries = [
  'Home Improvement Retail',
  'Flooring & Surfaces',
  'Roofing & Exteriors',
  'Windows & Doors',
  'Kitchen & Bath',
  'Fencing & Outdoor',
];

export default function Industries() {
  return (
    <section className="bg-gray-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
          Industries We Serve
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-800 rounded-full text-gray-300 text-sm"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
