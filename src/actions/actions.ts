// src/actions.ts
"use server";

import prisma from "@/lib/db";

export async function getPosts() {
  return await prisma.post.findMany();
}

export async function createPost(formData: FormData) {
  return await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
    },
  });
}

export async function getPostById(id: string) {
  return await prisma.post.findUnique({
    where: { id },
  });
}

export async function updatePost(id: string, title: string, content: string) {
  return await prisma.post.update({
    where: { id },
    data: {
      title,
      content,
    },
  });
}

export async function deletePost(id: string) {
  return await prisma.post.delete({
    where: { id },
  });
}