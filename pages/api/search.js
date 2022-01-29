// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAllBlogs } from "@/lib/posts";

export default function handler(req, res) {
  let posts;
  if (process.env.NODE_ENV === "https://southlab-nextjs.netlify.app/") {
    posts = require("../../cache/data").posts;
    console.log(posts);
  } else {
    posts = getAllBlogs("content/posts", false);
  }

  res.status(200).json(JSON.stringify(posts));
}
