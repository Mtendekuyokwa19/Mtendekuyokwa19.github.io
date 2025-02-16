import { BlogcardTemplate, Card } from "./blogPosts/template.tsx"
import {
  IoLogoDiscord,
  IoLogoMedium,
  IoLogoTwitter,
  // IoSearch,
} from "react-icons/io5";
import { H2 } from "./blogPosts/whyNeovim";
import { Link } from "react-router-dom";

const valentine = new Card("vimafterlife", "afterlife.jpg", "vim, the afterlife", "roads to walk in after finishing vim tutor, how each road will affect you", "Neovim", "green", 1)
export default function Home() {
  return (
    <div className="md:min-h-lvh lg:min-h-lvh">

      <section className="p-4 w-auto flex flex-col  items-center">
        <H2 id={""}>All Posts.</H2>
        <div className="lg:gap-y-10 gap-x-5 lg:grid md:grid md:gap-2 grid-flow-row grid-cols-1 sm:grid-cols-3 grid-rows-2 md:py-3 sm:py-9 flex flex-col">

          <BlogcardTemplate details={valentine} />
          <Blogcard2 />
          <Blogcard1 />
          <Blogcard />
        </div>
      </section>
    </div>
  );
}
export function Footer() {
  return (
    <div className="gap-7 bg-catWhite dark:text-everNavText dark:bg-stone-950      flex flex-col  w-full items-center p-8">
      <div className=" w-full flex justify-between">
        <a href="mailto:mtendekuyokwa@gmail.com">Contact</a>
        <div className="flex gap-2">
          <div>
            <a href="https://x.com/mtende_kuyokwa">
              <IoLogoTwitter size={20} />
            </a>
          </div>

          <div>
            <a href="https://medium.com/@mtendekuyokwa19">
              <IoLogoMedium size={20} />
            </a>
          </div>

          <div>
            <a href="https://discord.com/users/1178601817899282602">
              <IoLogoDiscord size={20} />
            </a>
          </div>
        </div>
        <a href="https://iccf-holland.org/">Donate</a>
      </div>
    </div>
  );
}

// function Search() {
//   return (
//     <div className="flex  w-full  justify-center items-center gap-2">
//       <input
//         className="bg-slate-200 dark:bg-everNav p-3 w-1/2 rounded-md"
//         placeholder="Search For Article..."
//         type="search"
//       />
//       <button className="bg-slate-200 dark:bg-everNav p-3 rounded-md">
//         <IoSearch size={25} />
//       </button>
//     </div>
//   );
// }

function Blogcard2() {
  return (
    <Link to="/emacsitch" className="flex justify-center items-center">
      <section className="w-full h-full flex-1   flex justify-center items-center ">
        <div className="flex dark:hover:bg-everNav p-2 rounded-md hover:bg-slate-200 transition ease-in-out dalay-150  flex-col w-72 gap-2 font-Quicksand ">
          <div className="flex justify-center items-center">
            <img
              src="/emacs.png"
              alt="my workflow"
              className="rounded-md h-52"
            />
          </div>
          <div className=" flex flex-col gap-1">
            <div className="bg-blue-700 font-JetBrains rounded-full flex justify-center items-center w-20 text-white text-sm">
              <p>rant</p>
            </div>
            <h2 className="font-bold text-xl">The emacs itch?</h2>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-400">A rant on being stuck between the emacs world and the vim world</p>
          <p className="font-sans text-sm text-blue-600 dark:text-blue-200">
            📖 1.2 min read
          </p>
        </div>
      </section>
    </Link>
  );
}
function Blogcard1() {
  return (
    <Link to="/viminthrees" className="flex">
      <section className="w-full  flex  flex-1  justify-center items-center ">
        <div className="flex dark:hover:bg-everNav p-2 rounded-md hover:bg-slate-200 transition ease-in-out dalay-150  flex-col w-72 gap-2 font-Quicksand ">
          <div>
            <img
              src="/preview2.png"
              alt="my workflow"
              className="rounded-md h-56"
            />
          </div>
          <div className=" flex flex-col gap-1">
            <div className="bg-emerald-700 font-JetBrains rounded-full flex justify-center items-center w-20 text-white text-sm">
              <p>Neovim</p>
            </div>
            <h2 className="font-bold text-xl">Vim in threes</h2>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-400">A dive into workflows, tricks and zellij,the multiplexer</p>
          <p className="font-sans text-sm text-blue-600 dark:text-blue-200">
            📖 1.5 min read
          </p>
        </div>
      </section>
    </Link>
  );
}
function Blogcard() {
  return (
    <Link to="/theworldmigratestoneovim">
      <section className="w-full  flex justify-center items-center ">
        <div className="flex dark:hover:bg-everNav p-2 rounded-md hover:bg-slate-200 transition ease-in-out dalay-150  flex-col w-72 gap-2 font-Quicksand ">
          <div>
            <img
              src="/woman.jpg"
              alt="woman on computer"
              className="rounded-md h-52"
            />
          </div>
          <div className=" flex flex-col gap-1">
            <div className="bg-emerald-700 font-JetBrains rounded-full flex justify-center items-center w-20 text-white text-sm">
              <p>Neovim</p>
            </div>
            <h2 className="font-bold text-xl">The world migrates to neovim</h2>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-400">
            Why the world will move to neovim soon. Explaining how you are
            playing a part
          </p>
          <p className="font-sans text-sm text-blue-600 dark:text-blue-200">
            📖 1 min read
          </p>
        </div>
      </section>
    </Link>
  );
}
