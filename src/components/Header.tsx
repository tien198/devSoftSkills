import { Link } from "react-router";

export default function Header({ navLinkList }: { navLinkList: string[] }) {
  return (
    <header className="flex justify-center items-center p-4 border-b">
      {navLinkList.map((link) => (
        <Link
          key={link}
          to={link}
          className="text-amber-100 hover:underline cursor-pointer mx-2"
        >
          {link.split(".")[1].toUpperCase()}
        </Link>
      ))}
    </header>
  );
}
