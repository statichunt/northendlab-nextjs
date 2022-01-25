import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { kebabCase } from "./utils/slugger";

export const getAllCategory = () => {
  let tagCount = {};
  const file = fs.readdirSync(path.join("content/posts"));
  file.map((file) => {
    const metaDataWithFrontMatter = fs.readFileSync(
      path.join("content/posts", file),
      "utf-8"
    );
    const { data: frontmatter, content } = matter(metaDataWithFrontMatter);

    if (frontmatter.draft == false) {
      frontmatter.categories.forEach((i) => {
        const formatedcategories = kebabCase(i);
        if (formatedcategories in tagCount) {
          tagCount[formatedcategories] += 1;
        } else {
          tagCount[formatedcategories] = 1;
        }
      });
    }
  });

  return tagCount;
};
