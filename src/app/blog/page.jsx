"use server";

import prisma from "@/lib/db";
import AddPostForm from "@/components/forms/AddPostForm";
import BlogList from "@/components/common/BlogList";
import { createPost } from "@/actions/actions";

export default async function Blog() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="custom-layout">

      <h2>Blog</h2>

      <AddPostForm createPost={createPost} />

      <h2 className="border-b-2 border-black">All posts ({posts.length})</h2>

      <BlogList posts={posts} />

    </div>
  );
}