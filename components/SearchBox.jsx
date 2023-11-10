"use client";
import { Combobox } from "@headlessui/react";
import { useIsClient } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const SearchBox = () => {
  const isClient = useIsClient();
  const router = useRouter();
  const [query, setQuery] = useState("");
  //   console.log("[Searchbox query]:", query);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (query.length > 1) {
      (async () => {
        const response = await fetch(
          "/api/search?query=" + encodeURIComponent(query),
        );
        const reviews = await response.json();
        setReviews(reviews);
      })();
    } else {
      setReviews([]);
    }
  }, [query]);
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
