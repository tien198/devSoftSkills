import { Outlet } from "react-router";
import Header from "../../components/Header";

const navLinks = [
  "/software-development-process/1.SDLC.json",
  "/software-development-process/2.requirement.json",
  "/software-development-process/3.wrspm-waterfall.json",
  "/software-development-process/4.design.json",
  "/software-development-process/5.testing.json",
];

export default function ProjectManagerLayout() {
  return (
    <>
      <Header navLinkList={navLinks} />
      <Outlet />
    </>
  );
}
