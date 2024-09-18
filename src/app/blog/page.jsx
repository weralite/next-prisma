"use server";

import prisma from "@/lib/db";
import AddPostForm from "@/components/forms/AddPostForm";
import BlogList from "@/components/common/BlogList";
import { createPost } from "@/actions/actions";
import { getPosts } from "@/actions/actions";

export default async function Blog() {
  const posts = await prisma.post.findMany();

    return (
        <div className="custom-layout">


        <h1>Blog</h1>

        <AddPostForm createPost={createPost}/>

        <h2>All posts</h2>
        <BlogList posts={posts} />


      </div>
    );
  }