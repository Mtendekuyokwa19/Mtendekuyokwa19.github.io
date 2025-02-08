import Home from "./Home";
import { Navbar } from "./navbar";
import { WhyNeovim } from "./blogPosts/whyNeovim";
import { createBrowserRouter } from "react-router-dom";
import { Page404 } from "./404";
import { VimInThrees } from "./blogPosts/vimInThrees";

import { EmacsItch } from "./blogPosts/emacsItch.tsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <Page404 />,
    children: [
      { index: true, element: <Home /> },
      { path: "theworldmigratestoneovim", element: <WhyNeovim /> },
      { path: "viminthrees", element: <VimInThrees /> }

      , { path: "emacsitch", element: <EmacsItch /> }
    ],
  },
]);
