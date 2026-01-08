import { Outlet } from "react-router";
import Header from "../../components/Header";

const navLinks = [
  "/uml/1.uml-introduce.json",
  "/uml/2.usecase-diagram-vs-story-mapping.json",
];

export default function UMLLayout() {
  return (
    <>
      <Header navLinkList={navLinks} />
      <Outlet />
    </>
  );
}
