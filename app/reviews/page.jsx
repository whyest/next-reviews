import Link from "next/link";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";
const ReviewsPage = async () => {
  const reviews = await getReviews();
  return (
    <>
      <Heading>Reviews Page</Heading>

      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review) => {
          const { title, slug, date, image } = review;
          return (
            <li
              key={slug}
              className="w-80 rounded border bg-white shadow hover:shadow-xl"
            >
              <Link href={`/reviews/${slug}`}>
                <img
                  src={image}
                  alt={title}
                  width="320"
                  height="180"
                  className="mb-2 rounded-t"
                />
                <h2 className="py-1 text-center font-orbitron font-semibold">
                  {title}
                </h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default ReviewsPage;
