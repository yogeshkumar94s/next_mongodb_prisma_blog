"use server"

// import { PrismaClient } from "@prisma/client";
// import { redirect } from "next/navigation";
// import type { NextRequest } from "next/server";

// const prisma = new PrismaClient();

// interface BlogPostFormData {
//   title: string;
//   imageUrl?: string;
//   category: string;
//   content: string;
//   tags: string;
// }

// export const addBlogPost = async (req: NextRequest) => {
 
//   const formData: BlogPostFormData = await req.json();

 
//   const { title, imageUrl, category, content, tags } = formData;

  
//   const newBlog = await prisma.post.create({
//     data: {
//       title,
//       imageUrl,
//       content,
//       category,
//       tags: tags.split(",").map((tag) => tag.trim()),
//     },
//   });

 
//   return redirect("/");
// };
