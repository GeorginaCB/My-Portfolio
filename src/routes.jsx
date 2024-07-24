import { createBrowserRouter, } from "react-router-dom";
import { Contact } from "./pages/contact";
import { Resume } from "./pages/resume";
import { Project } from "./pages/project";
import { Home } from "./pages/home";


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
