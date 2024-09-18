import prisma from '@/lib/db';
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default async function BlogPost({ params }) {
    const post = await prisma.post.findUnique({
        where: {
            slug: params.slug,
        },
    });
console.log(post)
    return (
        <div>
            <Breadcrumbs />
            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-4 text-center max-w-[500px]">
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </div>
            </div>
        </div>
    );
}