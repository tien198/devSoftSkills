import { Outlet } from "react-router";
import Header from "../../components/Header";

const navLinks = [
  "/kaban-trello/1.kaban-introduce.json",
  "/kaban-trello/2.setup-using.json",
];

export default function KabanTrelloLayout() {
  return (
    <>
      <Header navLinkList={navLinks} />
      <Outlet />
    </>
  );
}
