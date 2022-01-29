// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAllBlogs } from "@/lib/posts";

export default function handler(req, res) {
  const posts = require("../../cache/data").posts;

  res.status(200).json(JSON.stringify(posts));
}
