import prisma from '../../lib/db';
import Link from 'next/link';

export default async function BlogList() {

    const posts = await prisma.post.findMany();
    return (
        <ul className="flex flex-col items-center gap-5">
            {posts.map((post) => (
                <li key={post.id} className="flex flex-col gap-2 p-5">
                    <Link href={`/blog/${post.slug}`}>
                        {post.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}