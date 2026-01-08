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
      <Link
        to="/shell"
        className="text-blue-400 hover:underline hover:text-blue-300"
      >
        Shell
      </Link>
      <Link
        to="/kaban-trello"
        className="text-blue-400 hover:underline hover:text-blue-300"
      >
        Kaban Trello
      </Link>
      <Link
        to="/software-development-process"
        className="text-blue-400 hover:underline hover:text-blue-300"
      >
        Software Development Processes
      </Link>
      <Link
        to="/agile"
        className="text-blue-400 hover:underline hover:text-blue-300"
      >
        Agile
      </Link>
    </div>
  );
}
