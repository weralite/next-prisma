"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache"; 

export async function createPost(formData: FormData) {
  const post = await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      slug: (formData.get("title") as string).toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-"),
      content: formData.get("content") as string,
    },
  });

  revalidatePath("/blog"); 
  return post;
}

export async function getPosts() {
  return await prisma.post.findMany();
}