import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider } from "react-router";

import { createBrowserRouter } from "react-router";
import Git from "./pages/git/Git";
import Home from "./pages/home/Home";
import GitLayout from "./pages/git/Layout";
import KabanTrello from "./pages/kaban-trello/KabanTrello";
import KabanTrelloLayout from "./pages/kaban-trello/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      { index: true, element: <Home /> },
      {
        path: "git",
        element: <GitLayout />,
        children: [
          {
            index: true,
            element: (
              <div className="flex justify-center items-center mt-15 text-2xl">
                Select an item above to see details !
              </div>
            ),
          },
          {
            path: ":id",
            element: <Git />,
            loader: (args) =>
              import("./pages/git/loader").then((mod) => mod.loader(args)),
          },
        ],
      },
      {
        path: "kaban-trello",
        element: <KabanTrelloLayout />,
        children: [
          {
            index: true,
            element: (
              <div className="flex justify-center items-center mt-15 text-2xl">
                Select an item above to see details !
              </div>
            ),
          },
          {
            path: ":id",
            element: <KabanTrello />,
            loader: (args) =>
              import("./pages/kaban-trello/loader").then((mod) =>
                mod.loader(args)
              ),
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
