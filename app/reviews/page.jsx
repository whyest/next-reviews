import Link from "next/link";
import Image from "next/image";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";

export const metadata = {
  title: "Reviews",
};

const ReviewsPage = async () => {
  const reviews = await getReviews(6);
  // console.log("[Reviews page] reviews:", reviews);
  return (
    <>
      <Heading>Reviews Page</Heading>

      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review, index) => {
          const { title, slug, date, image } = review;
          return (
            <li
              key={slug}
              className="w-80 rounded border bg-white shadow hover:shadow-xl"
            >
              <Link href={`/reviews/${slug}`}>
                <Image
                  src={image}
                  priority={index === 0}
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
