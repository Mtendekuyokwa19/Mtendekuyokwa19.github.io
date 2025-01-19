import { useEffect, useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { IoMoon, IoSunny } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import { Footer } from "./Home";
import { Analytics } from "@vercel/analytics/react";
export const Navbar = () => {
  return (
    <div className=" h-dvh  justify-between md:h-full lg:h-full flex flex-col items-stretch bg-catWhite dark:text-everNavText dark:bg-everbg      w-full ">
      <HeaderMenu />

      <Analytics />
      <Outlet />
      <Footer />
    </div>
  );
};
function HeaderMenu() {
  return (
    <div className="flex w-full bg-catNav  sticky top-0 p-4 sm:justify-evenly md:justify-evenly justify-between dark:bg-everNav ">
      <Avatar />
      <div className="flex font-JetBrains font-bold gap-8 relative right-11 justify-center items-center">
        {/* <p className="text-lg">Blog</p> */}
        {/* <p className="text-lg">Lists</p> */}
        {/**/}
        {/* <p className="text-lg">About</p> */}
      </div>

      <div className="flex gap-4 justify-center items-center">
        <ToogleDark iconSize={25} />

        <Githubbtn />
      </div>
    </div>
  );
}

function Githubbtn() {
  return (
    <a href="https://github.com/Mtendekuyokwa19">
      <button className="flex justify-center items-center">
        <IoLogoGithub size={30} />
      </button>
    </a>
  );
}

function Avatar() {
  return (
    <Link to={"/"}>
      <div className="flex justify-center items-center gap-2">
        {/* <div className=""> */}
        {/*   <img src="/header.jpg" className="rounded-full w-10 flex justify-center items-center h-9 bg-red-600" alt="mypfp" /> */}
        {/**/}
        {/* </div> */}

        <div className="flex justify-center items-baseline gap-1">
          <p className="font-Alfa text-2xl">Mtende</p>

          <div className="font-Alfa rounded-full bg-green-700 w-2 h-2 text-2xl">
          </div>
        </div>
      </div>
    </Link>
  );
}

function ToogleDark({ iconSize }: Itoogledark) {
  const [dark, setDark] = useState(localStorage.getItem("dark") === "true");
  function darkModeHandler() {
    setDark(!dark);
    document.body.classList.toggle("dark");
    localStorage.setItem("dark", JSON.stringify(!dark));
  }
  useEffect(() => {
    document.body.classList.add(
      localStorage.getItem("dark") === "true" ? "dark" : "light",
    );
  }, []);
  return (
    <button onClick={darkModeHandler}>
      {dark ? <IoSunny size={iconSize} /> : <IoMoon size={iconSize} />}
    </button>
  );
}
interface Itoogledark {
  iconSize: number;
}
