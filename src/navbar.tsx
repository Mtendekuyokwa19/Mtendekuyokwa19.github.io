import { useEffect, useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { IoMenu, IoMoon, IoSunny } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import { Footer } from "./Home";
import { Analytics } from "@vercel/analytics/react";
export const Navbar = () => {
  const [modal, setmodal] = useState(false)
  function tooglemodal() {
    if (modal) { setmodal(false) }
    else {
      setmodal(true)
    }

  }
  return (
    <div className="  justify-between md:h-full lg:h-full flex flex-col items-stretch bg-catWhite dark:text-everNavText dark:bg-stone-950      w-full ">
      <HeaderMenu tooglemodal={tooglemodal} />
      <Modal modal={modal} tooglemodal={tooglemodal} />
      <Analytics />
      <div className={modal ? "hidden" : ""}>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
interface Iheadermenu {
  tooglemodal: () => void

}
function Hamburger({ tooglemodal }: Iheadermenu) {
  return (
    <button className="md:hidden flex" onClick={tooglemodal} ><IoMenu size={16} /></button>)

}
interface Imodal {
  modal: boolean

  tooglemodal: () => void

}
function Modal({ modal, tooglemodal }: Imodal) {
  return modal ? <Menu tooglemodal={tooglemodal} /> : ""








}
interface Imenu {

  tooglemodal: () => void

}
function Menu({ tooglemodal }: Imenu) {



  return (
    <section className="absolute flex-col  w-full h-screen bg-stone-900 flex justify-center items-center "
    >
      <div className="w-screen text-right px-12 p-4  font-bold" onClick={tooglemodal}> X</div>
      <section className="flex-col  w-full h-full bg-stone-900 flex justify-center items-center ">
        <div className="flex flex-col font-JetBrains font-bold gap-8 justify-center ">
          <Link to="/" onClick={tooglemodal} ><p className="text-lg hover:text-stone-600 dark:hover:text-stone-300">Blog</p></Link>
          <Link to="/list" onClick={tooglemodal} ><p className="text-lg dark:hover:text-stone-300">Lists</p></Link>
          <Link to="/bio" onClick={tooglemodal} ><p className="text-lg hover:text-stone-600 dark:hover:text-stone-300">Bio</p></Link>
        </div>


      </section>
    </section
    >
  )
}
function HeaderMenu({ tooglemodal }: Iheadermenu) {
  return (
    <div className="flex w-full bg-catNav  sticky top-0 p-4 sm:justify-evenly md:justify-evenly justify-between dark:bg-stone-900 ">
      <Avatar />
      <div className="lg:flex md:flex hidden font-JetBrains font-bold gap-8 relative right-11 justify-center items-center">
        <Link to="/" ><p className="text-lg hover:text-stone-600 dark:hover:text-stone-300">Blog</p></Link>
        <Link to="/list" ><p className="text-lg hover:text-stone-600 dark:hover:text-stone-300">Lists</p></Link>
        <Link to="/bio" ><p className="text-lg hover:text-stone-600 dark:hover:text-stone-300">Bio</p></Link>
      </div>

      <div className="flex gap-4 justify-center items-center">
        <Hamburger tooglemodal={tooglemodal} />
        <ToogleDark iconSize={16} />
        <Githubbtn />
      </div>
    </div>
  );
}

function Githubbtn() {
  return (
    <a href="https://github.com/Mtendekuyokwa19">
      <button className="flex justify-center items-center">
        <IoLogoGithub size={25} />
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
