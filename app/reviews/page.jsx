import Link from "next/link";
import Image from "next/image";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";
import PaginationBar from "@/components/PaginationBar";

export const revalidate = 30; // seconds

export const metadata = {
  title: "Reviews",
};

const PAGE_SIZE = 6;

const ReviewsPage = async ({ searchParams }) => {
  const page = parsePageParam(searchParams.page);
  const { reviews, pageCount } = await getReviews(PAGE_SIZE, page);
  console.log(
    "[ReviewsPage] rendering:",
    reviews.map((review) => review.slug).join(", "),
  );
  console.log("[ReviewsPage] rendering:", page);
  return (
    <>
      <Heading>Reviews Page</Heading>

      <PaginationBar href="/reviews" page={page} pageCount={pageCount} />

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

function parsePageParam(paramValue) {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1;
}
