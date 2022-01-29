// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const posts = require("../../cache/data").posts;

  res.status(200).json(JSON.stringify(posts));
}
