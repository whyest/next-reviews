import Heading from "@/components/Heading";
import { getReview, getSlugs } from "@/lib/reviews";

export const generateStaticParams = async () => {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
};

const ReviewPage = async ({ params: { slug } }) => {
  const review = await getReview(slug);
  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="pb-2 italic">{review.date}</p>
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