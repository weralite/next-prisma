import SubmitBtn from "../common/SubmitBtn";

export default function AddPostForm({ createPost }) {
  return (
    <form action={createPost} className="flex flex-col gap-2 p-4 w-full max-w-lg mx-auto">
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="border border-gray-300 rounded-lg p-2"
      />

      <textarea
        name="content"
        rows={5}
        placeholder="Content"
        className="border border-gray-300 rounded-lg p-2"
      />
  
      <SubmitBtn text="Add Post" />
 
    </form>
  );
}