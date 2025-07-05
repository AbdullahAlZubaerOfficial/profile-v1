import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import ProjectsDetails from "../pages/ProjectsDetails/ProjectsDetails";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/projects.json"),
        HydrateFallback: LoadingSpinner,
      },
    ],
  },
  {
    path: "project/:id",
    Component: ProjectsDetails,
    loader: () => fetch("/projects.json"),
    HydrateFallback: LoadingSpinner,
  },
]);
