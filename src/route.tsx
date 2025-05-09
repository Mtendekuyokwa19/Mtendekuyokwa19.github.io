import Home from "./Home";
import { Navbar } from "./navbar";
import { WhyNeovim } from "./blogPosts/whyNeovim";
import { createBrowserRouter } from "react-router-dom";
import { Page404 } from "./404";
import { VimInThrees } from "./blogPosts/vimInThrees";

import { EmacsItch } from "./blogPosts/emacsItch.tsx";
import { Bio } from "./bio.tsx";
import { Lists } from "./lists.tsx";
import { VimAfterlife } from "./blogPosts/vimtheafterlife.tsx";
import { WhatIread } from "./blogPosts/whatiread.tsx";
import { NeovimPage } from "./neovim.tsx";
import { ManPages } from "./blogPosts/manpages.tsx";
import { Intermidiate } from "./blogPosts/intemediatejumps.tsx";
import { Vimforrobotics } from "./blogPosts/robots.tsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <Page404 />,
    children: [
      { index: true, element: <Home /> },

      { path: "bio", element: <Bio /> },
      { path: "neovim", element: <NeovimPage /> },
      { path: "manpages", element: <ManPages /> },
      { path: "intermidiate", element: <Intermidiate /> },

      { path: "robotics", element: <Vimforrobotics /> },
      { path: "list", element: <Lists /> },
      { path: "vimafterlife", element: <VimAfterlife /> },
      { path: "theworldmigratestoneovim", element: <WhyNeovim /> },
      { path: "viminthrees", element: <VimInThrees /> },
      { path: "whatiread", element: <WhatIread /> }
      , { path: "emacsitch", element: <EmacsItch /> }
    ],

  },
]);
