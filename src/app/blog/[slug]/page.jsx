import prisma from '@/lib/db';
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default async function BlogPost({ params }) {
    const post = await prisma.post.findUnique({
        where: {
            slug: params.slug,
        },
    });

    return (
        <>
            <Breadcrumbs />
            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-4 text-center max-w-[500px]">
                    <h4>{post.title}</h4>
                    <p>{post.content}</p>
                </div>
            </div>
        </>
    );
}