"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache"; // Import revalidatePath from next/cache

export async function createPost(formData: FormData) {
  const post = await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      slug: (formData.get("title") as string).toLowerCase().replace(/\s/g, "-"),
      content: formData.get("content") as string,
    },
  });

  revalidatePath("/blog"); // Revalidate the path where the posts are listed

  return post;
}

export async function getPosts() {
  return await prisma.post.findMany();
}