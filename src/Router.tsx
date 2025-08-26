import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout/Layout";
import { Start } from "./pages/Start";
import { TheZoo } from "./pages/TheZoo";
import { TheChosenAnimal } from "./pages/TheChosenAnimal";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
                                            errorElement: <h2>Sidan kunde inte hittas</h2>, // placeholder för nu
        children: [
            {
                path: "/",
                element: <Start/>,
            },
            {
                path: "/zoo",
                element: <TheZoo/>,
            },
            {
                path: "/zoo/:id",
                element: <TheChosenAnimal/>,
            },
        ],
    }
])