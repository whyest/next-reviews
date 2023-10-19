import Heading from "@/components/Heading";
import ShareButtons from "@/components/ShareButtons";
import { getReview, getSlugs } from "@/lib/reviews";

export const generateStaticParams = async () => {
  const slugs = await getSlugs();
  console.log("[Review page] generateStaticParams:", slugs);
  return slugs.map((slug) => ({ slug }));
};

export const generateMetadata = async ({ params: { slug } }) => {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
};

const ReviewPage = async ({ params: { slug } }) => {
  const review = await getReview(slug);
  // console.log("[Review page] review:", review);
  return (
    <>
      <Heading>{review.title}</Heading>
      <div className="mb-3 flex items-baseline gap-3">
        <p className="pb-2 italic">{review.date}</p>
        <ShareButtons />
      </div>
      <img
        src={review.image}
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
