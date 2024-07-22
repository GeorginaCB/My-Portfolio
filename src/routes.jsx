import { createBrowserRouter, } from "react-router-dom";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { Project } from "./pages/project";
import { details } from "./pages/details";

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
    path: "/about",
    element: <abour/>
  },
  {
    path: "/detalhes",
    element: <deta/>
  },
  {
    path: "/servico-1",
    element: <details/>
  },
  
 
]);
