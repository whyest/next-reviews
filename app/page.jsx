import Heading from "@/components/Heading";
import { getFeaturedReview } from "@/lib/reviews";
import Image from "next/image";
import Link from "next/link";

const HomePage = async () => {
  const review = await getFeaturedReview();
  const { title, image, slug } = review;

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <div className="w-80 rounded border bg-white shadow hover:shadow-xl sm:w-full">
        <Link href={`/reviews/${slug}`} className="flex flex-col sm:flex-row">
          <Image
            src={image}
            alt="image"
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="py-1 text-center font-orbitron font-semibold sm:px-2">
            {title}
          </h2>
        </Link>
      </div>
    </>
  );
};
export default HomePage;
