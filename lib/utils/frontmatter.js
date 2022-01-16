import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const getAllFrontmatter = () => {
  const file = fs.readdirSync(path.join("Archive/posts"));
  const frontmatter = file.map((file) => {
    const metaDataWithFrontMatter = fs.readFileSync(
      path.join("Archive/posts", file),
      "utf-8"
    );
    const { data: frontmatter } = matter(metaDataWithFrontMatter);
    return frontmatter;
  });
  return frontmatter;
};
