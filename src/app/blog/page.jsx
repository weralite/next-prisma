import AddPostForm from "../../components/forms/AddPostForm";
import BlogList from "../../components/common/BlogList";

export default function Blog() {
    return (
        <div className="flex flex-col items-center h-screen gap-10 mt-10">


        <h1>Blog</h1>

        <AddPostForm />
        <BlogList />


      </div>
    );
  }