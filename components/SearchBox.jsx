"use client";
import { Combobox } from "@headlessui/react";
import { useIsClient } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

const SearchBox = () => {
  const isClient = useIsClient();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [debounceQuery] = useDebounce(query, 300);
  //   console.log("[Searchbox query]:", query);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (debounceQuery.length > 1) {
      const controller = new AbortController();

      (async () => {
        const url = "/api/search?query=" + encodeURIComponent(debounceQuery);
        const response = await fetch(url, { signal: controller.signal });
        const reviews = await response.json();
        setReviews(reviews);
      })();
      return () => controller.abort();
    } else {
      setReviews([]);
    }
  }, [debounceQuery]);
  const handleChange = (review) => {
    router.push(`/reviews/${review.slug}`);
  };
  if (!isClient) {
    return null;
  }

  return (
    <div className="relative w-48">
      <Combobox onChange={handleChange}>
        <Combobox.Input
          placeholder="Search..."
          className="w-full rounded border px-2 py-1"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Combobox.Options className="absolute w-full rounded-b border bg-white py-1">
          {reviews.map((review) => (
            <Combobox.Option key={review.slug} value={review}>
              {({ active }) => (
                <span
                  className={`block w-full truncate px-2 ${
                    active ? "cursor-pointer bg-orange-100" : ""
                  }`}
                >
                  {review.title}
                </span>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
};
export default SearchBox;
