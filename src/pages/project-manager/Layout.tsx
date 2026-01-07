import { Outlet } from "react-router";
import Header from "../../components/Header";

const navLinks = [
  "/project-manager/1.SDLC.json",
  "/project-manager/2.requirement.json",
];

export default function ProjectManagerLayout() {
  return (
    <>
      <Header navLinkList={navLinks} />
      <Outlet />
    </>
  );
}
