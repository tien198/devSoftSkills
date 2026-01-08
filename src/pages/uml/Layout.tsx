import { Outlet } from "react-router";
import Header from "../../components/Header";

const navLinks = [
  "/uml/1.uml-introduce.json",
  "/uml/2.usecase-diagram-vs-story-mapping.json",
  "/uml/3.class-diagram.json",
  "/uml/4.sequence-activity-diagram.json",
  "/uml/5.state-chart-diagram.json",
];

export default function UMLLayout() {
  return (
    <>
      <Header navLinkList={navLinks} />
      <Outlet />
    </>
  );
}
