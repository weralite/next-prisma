import prisma from '@/lib/db';

export default async function PostPage({ params }) {
    const post = await prisma.post.findUnique({
        where: {
            id: params.id,
        },
    });

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}