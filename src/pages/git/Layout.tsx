import { Outlet } from "react-router";
import Header from "../../components/Header";

const articleNameList = [
  "1.readme.json",
  "2.vsc-git.json",
  "3.git-basic-command.json",
  "4.merge-and-diff.json",
  "5.git-stashing-vs-rollback-commit.json",
  "6.gitlab.json",
];

export default function GitLayout() {
  return (
    <>
      <Header articleNameList={articleNameList} />
      <Outlet />
    </>
  );
}
