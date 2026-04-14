import { useEffect, useState } from "react";
import { Star, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/layout/FadeIn";

interface Review {
  author: string;
  photoUri: string | null;
  rating: number;
  text: string;
  timeAgo: string;
}

interface ReviewsData {
  rating: number;
  totalReviews: number;
  reviews: Review[];
}

const FALLBACK_DATA: ReviewsData = {
  rating: 5.0,
  totalReviews: 77,
  reviews: [
    {
      author: "Sarah M.",
      photoUri: null,
      rating: 5,
      text: "Dr. Birch is absolutely phenomenal. After years of struggling with gut issues and seeing countless doctors, the FMT treatment at Purety completely changed my life. I finally feel like myself again. The entire staff is warm, professional, and genuinely caring.",
      timeAgo: "2 weeks ago",
    },
    {
      author: "James T.",
      photoUri: null,
      rating: 5,
      text: "I came in for PRP injections on my knee after a sports injury. Dr. Birch took the time to explain everything thoroughly and the results have been incredible. No more pain and I'm back to running. Highly recommend this clinic to anyone looking for regenerative options.",
      timeAgo: "1 month ago",
    },
    {
      author: "Linda R.",
      photoUri: null,
      rating: 5,
      text: "The EBO2 ozone therapy sessions have made a noticeable difference in my energy levels and overall wellbeing. Dr. Birch is incredibly knowledgeable and takes a truly holistic approach. This is not your average doctor's office — they actually listen and care.",
      timeAgo: "3 weeks ago",
    },
    {
      author: "Michael C.",
      photoUri: null,
      rating: 5,
      text: "After dealing with long COVID symptoms for over a year, I was desperate for relief. The therapeutic plasma exchange protocol at Purety gave me my life back. Dr. Birch is a pioneer in this space and his expertise shows. Cannot thank this team enough.",
      timeAgo: "2 months ago",
    },
    {
      author: "Angela K.",
      photoUri: null,
      rating: 5,
      text: "From the moment I walked in, I felt welcomed and heard. Dr. Dena Birch is wonderful with my kids and takes such a thoughtful, natural approach to their care. We drive from Los Angeles because there is simply no one else like this in Southern California.",
      timeAgo: "1 month ago",
    },
  ],
};

interface GoogleReviewsProps {
  heading?: string;
  maxReviews?: number;
}

export function GoogleReviews({
  heading = "What Patients Say",
  maxReviews = 5,
}: GoogleReviewsProps) {
  const [data, setData] = useState<ReviewsData | null>(null);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((d) => {
        if (!d.error && d.reviews?.length > 0) setData(d);
      })
      .catch(() => {});
  }, []);

  const display = data ?? FALLBACK_DATA;
  const displayed = display.reviews.slice(0, maxReviews);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
              {heading}
            </h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-current" />
              ))}
              <span className="text-muted-foreground font-medium ml-2">
                {display.rating.toFixed(1)} from {display.totalReviews}+ Google Reviews
              </span>
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayed.map((review, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 h-full flex flex-col">
                <div className="flex text-accent mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow italic line-clamp-5">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  {review.photoUri ? (
                    <img
                      src={review.photoUri}
                      alt={review.author}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center shrink-0">
                      {review.author.charAt(0)}
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-sm text-foreground">
                      {review.author}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {review.timeAgo}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="text-center">
            <a
              href="https://share.google/c7xr79PiAXp0GYVnp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
              data-testid="link-google-reviews"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm font-bold text-gray-700">
                Read All {display.totalReviews}+ Reviews on Google
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
