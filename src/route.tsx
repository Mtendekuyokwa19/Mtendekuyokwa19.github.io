import { createBrowserRouter } from "react-router";
import Home from "./Home";
import { Navbar } from "./navbar";
import { WhyNeovim } from "./blogPosts/whyNeovim";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Home /> },
      { path: "theworldmigratestoneovim", element: <WhyNeovim /> },
    ],
  },
]);
