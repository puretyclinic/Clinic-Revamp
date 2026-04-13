import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Star } from "lucide-react";

interface RatingSummary {
  pageId: string;
  totalRatings: number;
  averageStars: number;
  distribution: Record<number, number>;
}

interface StarRatingProps {
  pageId: string;
  pageType: "article" | "service" | "condition";
  pageTitle: string;
}

const STORAGE_KEY = (pageId: string) => `rated_${pageId}`;

export function StarRating({ pageId, pageType, pageTitle }: StarRatingProps) {
  const [hovered, setHovered] = useState(0);
  const [submitted, setSubmitted] = useState(
    () => !!localStorage.getItem(STORAGE_KEY(pageId))
  );
  const queryClient = useQueryClient();

  const { data: summary } = useQuery<RatingSummary>({
    queryKey: ["/api/ratings", pageId],
    queryFn: async () => {
      const res = await fetch(`/api/ratings/${encodeURIComponent(pageId)}`);
      if (!res.ok) throw new Error("Failed to load rating");
      return res.json();
    },
  });

  const submit = useMutation({
    mutationFn: async (stars: number) => {
      const res = await fetch("/api/ratings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pageId, pageType, pageTitle, stars }),
      });
      if (!res.ok) throw new Error("Failed to submit rating");
      return res.json();
    },
    onSuccess: (data) => {
      localStorage.setItem(STORAGE_KEY(pageId), "1");
      setSubmitted(true);
      queryClient.setQueryData(["/api/ratings", pageId], data.summary);
    },
  });

  const avg = summary?.averageStars ?? 0;
  const total = summary?.totalRatings ?? 0;

  return (
    <div className="flex flex-col items-center gap-3 py-6 px-4 bg-muted/40 rounded-2xl border border-border/50 text-center">
      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
        Was this page helpful?
      </p>

      {submitted ? (
        <div className="flex flex-col items-center gap-1" data-testid="rating-thankyou">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className={`w-6 h-6 ${s <= Math.round(avg) ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <p className="text-sm font-semibold text-foreground mt-1">Thank you for your feedback!</p>
          {total > 0 && (
            <p className="text-xs text-muted-foreground">
              {avg.toFixed(1)} out of 5 · {total} {total === 1 ? "rating" : "ratings"}
            </p>
          )}
        </div>
      ) : (
        <div className="flex gap-1" data-testid="rating-stars-input">
          {[1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              data-testid={`button-star-${s}`}
              onMouseEnter={() => setHovered(s)}
              onMouseLeave={() => setHovered(0)}
              onClick={() => submit.mutate(s)}
              disabled={submit.isPending}
              aria-label={`Rate ${s} out of 5 stars`}
              className="focus:outline-none disabled:opacity-50 transition-transform hover:scale-110"
            >
              <Star
                className={`w-8 h-8 transition-colors ${
                  s <= hovered
                    ? "fill-amber-400 text-amber-400"
                    : "text-gray-300 hover:text-amber-300"
                }`}
              />
            </button>
          ))}
        </div>
      )}

      {!submitted && total > 0 && (
        <p className="text-xs text-muted-foreground">
          {avg.toFixed(1)} ★ · {total} {total === 1 ? "rating" : "ratings"}
        </p>
      )}
    </div>
  );
}
