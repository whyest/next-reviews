import { readFile } from "node:fs/promises";
import { marked } from "marked";
import Heading from "@/components/Heading";

const StardewValleyPage = async () => {
  const text = await readFile("./content/reviews/stardew-valley.md", "utf8");
  const html = marked(text, { headerIds: false, mangle: false });
  return (
    <>
      <Heading>Stardew-valley page</Heading>
      <img
        src="/images/stardew-valley.jpg"
        alt="image"
        width="640"
        height="360"
        className="mb-2 rounded"
      />

      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className="prose prose-slate max-w-screen-sm"
      />
    </>
  );
};
export default StardewValleyPage;
