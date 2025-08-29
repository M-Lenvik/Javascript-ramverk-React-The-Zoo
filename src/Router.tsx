import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout/Layout";
import { Start } from "./pages/Start";
import { TheZoo } from "./pages/TheZoo";
import { TheChosenAnimal } from "./pages/TheChosenAnimal";
import { About } from "./components/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h2>Sidan kunde inte hittas</h2>,
    children: [
      {
        path: "/",
        element: <Start />,
      },
      {
        path: "/zoo",
        element: <TheZoo />,
      },
      {
        path: "/zoo/:id",
        element: <TheChosenAnimal />,
      },
      {
        path: "/about",
        element: <About />,
      }
    ],
  },
]);
