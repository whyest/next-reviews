import Heading from "@/components/Heading";
import { getReview } from "@/lib/reviews";

const StardewValleyPage = async () => {
  const review = await getReview("stardew-valley");
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
export default StardewValleyPage;
