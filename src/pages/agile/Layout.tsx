import { Outlet } from "react-router";
import Header from "../../components/Header";

const navLinks = [
  "/agile/1.agile-foundation.json",
  "/agile/2.agile-for-developer.json",
];

export default function AgileLayout() {
  return (
    <>
      <Header navLinkList={navLinks} />
      <Outlet />
    </>
  );
}
