import { readFile } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";
import Heading from "@/components/Heading";

const getReview = async (slug) => {
  const text = await readFile(`./content/reviews/${slug}.md`, "utf8");
  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const body = marked(content, { headerIds: false, mangle: false });
  return { title, date, image, body };
};

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
