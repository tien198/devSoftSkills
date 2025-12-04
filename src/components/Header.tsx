import { Link } from "react-router";

export default function Header({
  articleNameList,
}: {
  articleNameList: string[];
}) {
  return (
    <header className="flex justify-center items-center p-4 border-b">
      {articleNameList.map((name) => (
        <Link
          key={name}
          to={`/git/${name}`}
          className="text-amber-100 hover:underline cursor-pointer mx-2"
        >
          {name.split(".")[1].toUpperCase()}
        </Link>
      ))}
    </header>
  );
}
