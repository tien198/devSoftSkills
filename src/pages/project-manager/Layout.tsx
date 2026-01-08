import { Outlet } from "react-router";
import Header from "../../components/Header";

const navLinks = [
  "/project-manager/1.SDLC.json",
  "/project-manager/2.requirement.json",
  "/project-manager/3.wrspm-waterfall.json",
  "/project-manager/4.design.json",
  "/project-manager/5.testing.json",
];

export default function ProjectManagerLayout() {
  return (
    <>
      <Header navLinkList={navLinks} />
      <Outlet />
    </>
  );
}
