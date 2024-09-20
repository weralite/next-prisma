import SubmitBtn from "../common/SubmitBtn";

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-2 p-4 w-full max-w-lg mx-auto">
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="border border-gray-300 rounded-lg p-2"
      >
      </input>
      <input
        type="password"
        name="password"
        rows={5}
        placeholder="Password"
        className="border border-gray-300 rounded-lg p-2"
      >
      </input>
      <SubmitBtn text="Login" />

    </form>
  );
}