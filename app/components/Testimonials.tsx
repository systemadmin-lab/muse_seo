import { Star } from "lucide-react";

const reviewColumns = [
  {
    linkLabel: "See All Reviews on Google",
    href: "https://www.google.com/search?q=MuseCool+reviews",
    reviews: [
      {
        quote:
          "Our daughter looks forward to every lesson, and her confidence at the piano has grown so much since she started.",
        author: "Anne T, 37, London",
      },
      {
        quote:
          "The lessons feel like excellent value. Alongside private tuition, the extra courses and events make the whole experience richer.",
        author: "Kateryna S, 25, London",
      },
    ],
  },
  {
    linkLabel: "See All Reviews on Facebook",
    href: "https://www.facebook.com/search/top?q=MuseCool",
    reviews: [
      {
        quote:
          "The online sessions are warm, interactive, and easy for children to follow. The teacher kept everyone engaged from start to finish.",
        author: "Jane F, 36, London",
      },
      {
        quote:
          "Our son came away smiling after every class. He explored different styles of music and connected quickly with his teacher.",
        author: "Jeremy C, 40, London",
      },
    ],
  },
];

function RatingStars() {
  return (
    <div className="flex gap-1 text-[#ff8900]" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="h-5 w-5 fill-current"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="relative z-10 bg-[#fbf8f6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <h2 id="testimonials-title" className="sr-only">
          Parent testimonials
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {reviewColumns.map((column) => (
            <div key={column.linkLabel} className="flex flex-col gap-9">
              {column.reviews.map((review) => (
                <figure key={review.author}>
                  <RatingStars />
                  <blockquote className="mt-3 text-xl font-bold italic leading-snug tracking-normal text-[#19191b] sm:text-2xl">
                    &apos;{review.quote}&apos;
                  </blockquote>
                  <figcaption className="mt-4 text-base font-medium italic leading-7 text-[#6b5849] sm:text-lg">
                    {review.author}
                  </figcaption>
                </figure>
              ))}

              <a
                href={column.href}
                className="mt-1 inline-flex w-fit text-base font-bold text-[#006184] transition hover:text-[#ff8900] sm:text-lg"
              >
                {column.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
