import { Star } from 'lucide-react';
import { TESTIMONIALS, TESTIMONIALS_SECTION } from '@/lib/vjtours-data';

export default function TestimonialsSection() {
  return (
    <section
      id="why-choose-us"
      className="scroll-mt-20 border-b border-[#1D2D27] bg-[#111C18] py-20 text-[#F7F6F2] lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Editorial Header */}
        <div className="flex flex-col gap-4 border-b border-white/15 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-sm font-semibold tracking-wide text-[#D4A359] tabular-nums">
              03
            </p>
            <h2 className="font-display mt-1 text-3xl font-semibold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              {TESTIMONIALS_SECTION.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-[#E5E2D9] tabular-nums">
            <Star className="h-4 w-4 fill-[#D4A359] text-[#D4A359]" aria-hidden="true" />
            <span>{TESTIMONIALS_SECTION.ratingLabel}</span>
          </div>
        </div>

        {/* 3-Column Editorial Quote Grid */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-white/15">
          {TESTIMONIALS.map((item, idx) => (
            <figure
              key={item.id}
              className={`flex flex-col justify-between ${
                idx === 0
                  ? 'lg:pr-10'
                  : idx === 1
                    ? 'lg:px-10'
                    : 'lg:pl-10'
              }`}
            >
              <div>
                <div className="flex items-center gap-1" aria-label={`${item.stars} out of 5 stars`}>
                  {Array.from({ length: item.stars }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-[#D4A359] text-[#D4A359]"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="mt-6 text-base leading-relaxed text-[#EBE8DF] sm:text-lg">
                  {item.quote}
                </blockquote>
              </div>

              <figcaption className="mt-8 border-t border-white/10 pt-5">
                <div className="font-display text-lg font-medium text-white">{item.author}</div>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs font-medium text-[#A9B5AF]">
                  <span>{item.city}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.tripType}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
