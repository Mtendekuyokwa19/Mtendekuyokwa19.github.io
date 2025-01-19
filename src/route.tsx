import Home from "./Home";
import { Navbar } from "./navbar";
import { WhyNeovim } from "./blogPosts/whyNeovim";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Home /> },
      { path: "theworldmigratestoneovim", element: <WhyNeovim /> },
    ],
  },
  {
    path: "/hello",
    element: <App />,
  },
]);
