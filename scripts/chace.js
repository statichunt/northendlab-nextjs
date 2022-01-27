const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const currentDate = new Date();

function postData() {
  const files = fs.readdirSync(path.join("content/posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("content/posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);
    const category = frontmatter.categories;

    return {
      slug,
      frontmatter,
      category,
    };
  });
  const filterByDate = posts.filter(
    (f) => new Date(f.frontmatter.date) > currentDate
  );
  return `export const posts = ${JSON.stringify(filterByDate)}`;
}

try {
  fs.readdirSync("cache");
} catch (error) {
  fs.mkdirSync("cache");
}

fs.writeFile("cache/data.js", postData(), function (err) {
  if (err) return console.log(err);
  console.log("Posts Cached...");
});
