export default function BlogList({ posts = [] }) {
    if (posts.length === 0) {
        return <div className="p-5 text-gray-500">No posts found</div>;
      }


    return (
        <div className="flex flex-col items-center gap-5">
            {posts.map((post) => (
                <div key={post.id} className="flex flex-col gap-2 p-5 border border-gray-300 rounded-lg">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}