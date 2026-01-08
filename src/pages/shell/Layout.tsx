import { Outlet } from "react-router";
import Header from "../../components/Header";

const navLinks = [
  "/shell/1.shell-tool-scripting.json",
  "/shell/2.comand-line-environment.json",
];

export default function ShellLayout() {
  return (
    <>
      <Header navLinkList={navLinks} />
      <Outlet />
    </>
  );
}
