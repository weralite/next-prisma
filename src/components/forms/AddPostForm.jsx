import SubmitBtn from "../common/SubmitBtn";
import { createPost} from "../../actions/actions";

export default function AddPostForm() {
  return (
    <form action={createPost} className="flex flex-col gap-2 p-4 w-full max-w-lg mx-auto">
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="border border-gray-300 rounded-lg p-2"
      >
      </input>
      <input
        type="text"
        name="content"
        placeholder="Content"
        className="border border-gray-300 rounded-lg p-2 h-40"
      >
      </input>
      <SubmitBtn text="Add Post" />

    </form>
  );
}