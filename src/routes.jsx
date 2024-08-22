import { createBrowserRouter, } from "react-router-dom";
import { Resume } from "./pages/resume";
import { Project } from "./pages/project";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";


export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/project",
    element: <Project/>,
  },
  {
    path: "/resume",
    element: < Resume/>,
  },
]);
