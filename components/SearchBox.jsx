"use client";
import { Combobox } from "@headlessui/react";
import { useIsClient } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";

const reviews = [
  { slug: "cuphead-2", title: "Cuphead 2" },
  { slug: "hades-2018", title: "Hades" },
  { slug: "fall-guys", title: "Fall Guys: Ultimate Knockout" },
  { slug: "black-mesa", title: "Black Mesa" },
  { slug: "disco-elysium", title: "Disco Elysium" },
  { slug: "dead-cells", title: "Dead Cells" },
];

const SearchBox = () => {
  const isClient = useIsClient();
  const router = useRouter();
  const [query, setQuery] = useState("");
  //   console.log("[Searchbox query]:", query);
  const handleChange = (review) => {
    router.push(`/reviews/${review.slug}`);
  };
  if (!isClient) {
    return null;
  }

  const filtered = reviews.filter((review) => review.title.includes(query));
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
          {filtered.map((review) => (
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
