import prisma from '@/lib/db';

export default async function BlogPost({ params }) {
    const post = await prisma.post.findUnique({
        where: {
            slug: params.slug,
        },
    });

    return (
        <div className="custom-layout">
            <div className='max-w-[500px]'>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            </div>

        </div>
    );
}