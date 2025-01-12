import { useEffect, useState } from "react"
import { IoLogoGithub } from "react-icons/io"
import { IoMoon, IoSunny } from "react-icons/io5"
import { Outlet } from "react-router"

export const Navbar = () => {
  return (
    <div className="gap-7 bg-catWhite   h-full dark:text-everNavText dark:bg-everbg      flex flex-col  w-screen items-center">
      <HeaderMenu />

      <Outlet />
    </div>
  )
}
function HeaderMenu() {
  return (<div className="flex w-full bg-catNav  p-4 justify-evenly dark:bg-everNav ">
    <Avatar />
    <div className="flex font-JetBrains font-bold gap-8 relative right-11 justify-center items-center">
      <p className="text-lg">Blog</p>
      <p className="text-lg">Lists</p>

      <p className="text-lg">About</p>
    </div>

    <div className="flex gap-4 justify-center items-center">
      <ToogleDark iconSize={25} />

      <Githubbtn />
    </div>

  </div>)
}


function Githubbtn() {
  return (

    <a href="https://github.com/Mtendekuyokwa19">

      <button className="flex justify-center items-center">

        <IoLogoGithub size={30} />


      </button>
    </a>
  )

}

function Avatar() {
  return (
    <div className="flex justify-center items-center gap-2">
      {/* <div className=""> */}
      {/*   <img src="/header.jpg" className="rounded-full w-10 flex justify-center items-center h-9 bg-red-600" alt="mypfp" /> */}
      {/**/}
      {/* </div> */}

      <div className="flex justify-center items-baseline gap-1">
        <p className="font-Alfa text-2xl">Mtende</p>

        <div className="font-Alfa rounded-full bg-green-700 w-2 h-2 text-2xl"></div>

      </div>
    </div>
  )

}

function ToogleDark({ iconSize }: Itoogledark) {
  const [dark, setDark] = useState(false)
  function darkModeHandler() {
    setDark(!dark)
    document.body.classList.toggle("dark")
    localStorage.setItem("dark", JSON.stringify(dark))
  }

  return (

    <button onClick={darkModeHandler}>
      {dark ? <IoSunny size={iconSize} /> : <IoMoon size={iconSize} />}
    </button>
  )

}
interface Itoogledark {
  iconSize: number
} 
