import { Outlet } from "react-router";
import Header from "../../components/Header";

const navLinks = [
  "/git/1.readme.json",
  "/git/2.vsc-git.json",
  "/git/3.git-basic-command.json",
  "/git/4.merge-and-diff.json",
  "/git/5.git-stashing-vs-rollback-commit.json",
  "/git/6.gitlab.json",
];

export default function GitLayout() {
  return (
    <>
      <Header navLinkList={navLinks} />
      <Outlet />
    </>
  );
}
