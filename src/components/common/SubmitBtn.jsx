export default function SubmitBtn({ text }) {
  return (
    <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
      {text}
    </button>
  );
}