import fs from "fs";
import matter from "gray-matter";
import path from "path";
const currentDate = new Date();
// banner data
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
// default page data
export const getDefaultPage = (type) => {
  const DefaultFile = fs.readdirSync(path.join(type));
  const markDownFile = DefaultFile.filter((d) => d.includes(".md"));
  const pageData = markDownFile.filter((d) => d.match(/^[a-z]/));

  const defaultPAge = pageData.map((filename) => {
    const slugWspace = filename.replace(".md", "");
    const slug = slugWspace.replace(/ /g, "-").toString();
    const metaDataWithFrontMatter = fs.readFileSync(
      path.join(type, filename),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(metaDataWithFrontMatter);
    return {
      frontmatter,
      content,
      slug,
    };
  });

  return defaultPAge;
};
// all types of blog
export const getAllBlogs = (type, check) => {
  const file = fs.readdirSync(path.join(type));
  const posts = file.map((filename) => {
    const slug = filename.replace(/ /g, "-").replace(".md", "");
    const postsData = fs.readFileSync(path.join(type, filename), "utf-8");

    const { data: frontmatter, content } = matter(postsData);
    const category = frontmatter.categories ? frontmatter.categories : "";

    return { frontmatter, slug, content, category };
  });

  const filterByDraft = posts.filter(
    (p) => p.frontmatter.draft === false && posts
  );
  const filterByDate = check
    ? filterByDraft
    : filterByDraft.filter((d) => new Date(d.frontmatter.date) <= currentDate);

  return filterByDate;
};
