"use server";

import prisma from "@/lib/db";


export async function createPost(formData: FormData) {
  return await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
    },
  });
}


export async function getPosts() {
  return await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}