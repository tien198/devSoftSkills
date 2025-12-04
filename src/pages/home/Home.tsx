import { Link } from "react-router";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-screen text-2xl">
      Home Page
      <Link
        to="/git/1.readme.json"
        className="text-blue-400 hover:underline hover:text-blue-300"
      >
        Git
      </Link>
    </div>
  );
}
