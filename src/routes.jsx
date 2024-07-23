import { createBrowserRouter, } from "react-router-dom";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { Project } from "./pages/project";
import { Resume } from "./pages/resume";


export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contactos",
    element: <Contact/>
  },
  {
    path: "/projetos",
    element: <Project />,
  },
  {
    path: "/resumo",
    element: <Resume />,
  },
  {
    path: "/detalhes",
    element: <details/>
  },
  {
    path: "/servico-1",
    element: <details/>
  },
]);
