import { createBrowserRouter } from "react-router";
import Home from "./Home"
import { Navbar } from "./navbar";
export const router = createBrowserRouter([

  {
    path: "/",
    element: <Navbar />
  }

])
