import Link from 'next/link';

export default async function BlogList({ posts }) {
    
    return (
        <ul className="flex flex-col items-center gap-5">
            {posts.map((post) => (
                <li key={post.id} className="flex flex-col text-2xl font-bold gap-2 p-2">
                    <Link href={`/blog/${post.slug}`}>
                        {post.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}