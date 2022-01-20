import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const getSingleIndexData = (type) => {
  const bannerFile = fs.readdirSync(path.join(type));

  const bannerIndex = bannerFile.filter((index) => index.match(/^_/));
  const matterData = fs.readFileSync(path.join(type, bannerIndex[0]), "utf-8");
  const { data: frontmatter, content } = matter(matterData);

  return {
    frontmatter,
    content,
  };
};
export const getSingleData = (type) => {
  const contentData = fs.readdirSync(path.join(type));

  const defaultFile = contentData.filter((c) => c.match(/^[a-z]/));
  const contactIndex = defaultFile.filter((d) => d.includes(".md"));
  const matterData = fs.readFileSync(path.join(type, contactIndex[0]), "utf-8");
  const { data: frontmatter, content } = matter(matterData);

  return {
    frontmatter,
    content,
  };
};
export const getAllBlogs = (type) => {
  const file = fs.readdirSync(path.join(type));
  const posts = file.map((filename) => {
    const slug = filename.replace(/ /g, "-").replace(".md", "");
    const postsData = fs.readFileSync(path.join(type, filename), "utf-8");

    const { data: frontmatter, content } = matter(postsData);
    const category = frontmatter.categories ? frontmatter.categories : "";

    return { frontmatter, slug, content, category };
  });

  return posts;
};
