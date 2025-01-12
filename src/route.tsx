import { createBrowserRouter } from "react-router";
import Home from "./Home"
import { Navbar } from "./navbar";
import { Post } from "./blogPosts/page";
export const router = createBrowserRouter([

  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Home /> }

      , { path: "post", element: <Post /> }
    ]
  }

])
