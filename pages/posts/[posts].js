import { getAllBlogs } from "@/lib/posts";
import matter from "gray-matter";
import React from "react";
import fs from

const Posts=()=>{

}

// export const getStaticPaths=()=>{
//   const posts=getAllBlogs()
//   const paths=posts.map(slug=>({
//     params:{
//       posts:slug.slug
//     }
//   }))
//   return{
//     paths,
//     fallback:false
//   }
// }
// export const getStaticProps=({params})=>{
//   const {posts}=params
//   const singleMetaDataWithFrontMatter = fs.readFileSync(
//     path.join("Archive/posts", posts + ".md"),
//     "utf-8"
//   );
//  const {data:frontmatter,content}=matter(singleMetaDataWithFrontMatter)
//   return {
//     props:{
//       frontmatter:frontmatter,
//       content:content,
//     }
//   }

// }
export default Posts;
