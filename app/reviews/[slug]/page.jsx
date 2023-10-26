import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Heading from "@/components/Heading";
import ShareButtons from "@/components/ShareButtons";
import { getReview, getSlugs } from "@/lib/reviews";

export const dynamic = "force-dynamic";

// export const generateStaticParams = async () => {
//   const slugs = await getSlugs();
//   // console.log("[Review page] generateStaticParams:", slugs);
//   return slugs.map((slug) => ({ slug }));
// };

export const generateMetadata = async ({ params: { slug } }) => {
  const review = await getReview(slug);
  if (!review) {
    notFound();
  }
  return {
    title: review.title,
  };
};

const ReviewPage = async ({ params: { slug } }) => {
  const review = await getReview(slug);
  if (!review) {
    notFound();
  }
  console.log("[Review Page] rendering", slug);
  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="pb-3 font-semibold">{review.subtitle}</p>
      <Link
        href={"/reviews"}
        className="my-2 inline-block rounded border px-2 py-1 text-sm capitalize text-slate-500 duration-200 hover:bg-orange-100 hover:text-slate-700"
      >
        Back to reviews
      </Link>
      <div className="mb-3 flex items-baseline gap-3">
        <p className="pb-2 italic">{review.date}</p>
        <ShareButtons />
      </div>

      <Image
        src={review.image}
        priority
        alt="image"
        width="640"
        height="360"
        className="mb-2 rounded"
      />

      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="prose prose-slate max-w-screen-sm"
      />
    </>
  );
};
export default ReviewPage;
