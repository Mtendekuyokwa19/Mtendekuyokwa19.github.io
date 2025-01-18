import {
  IoLogoDiscord,
  IoLogoMedium,
  IoLogoTwitter,
  IoSearch,
} from "react-icons/io5";
import { H2 } from "./blogPosts/page";

export default function Home() {
  return (
    <div>
      {/* <Search /> */}

      <section className="w-auto flex flex-col  items-center">
        <H2>All Posts.</H2>
        <div className="lg:gap-y-10 gap-x-5 lg:grid md:grid sm:flex flex-col md:gap-2 grid-flow-row grid-cols-3 grid-rows-2 md:py-3 sm:py-9">
          <Blogcard />

          <Blogcard />

          <Blogcard />
          <Blogcard />
          <Blogcard />
        </div>
      </section>
    </div>
  );
}
export function Footer() {
  return (
    <div className="gap-7 bg-catWhite dark:text-everNavText dark:bg-everbg      flex flex-col  w-full items-center p-8">
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
function Search() {
  return (
    <div className="flex  w-full  justify-center items-center gap-2">
      <input
        className="bg-slate-200 dark:bg-everNav p-3 w-1/2 rounded-md"
        placeholder="Search For Article..."
        type="search"
      />
      <button className="bg-slate-200 dark:bg-everNav p-3 rounded-md">
        <IoSearch size={25} />
      </button>
    </div>
  );
}

function Blogcard() {
  return (
    <section className="w-full  flex justify-center items-center ">
      <div className="flex dark:hover:bg-everNav p-2 rounded-md hover:bg-slate-200 transition ease-in-out dalay-150  flex-col w-72 gap-2 font-Quicksand ">
        <div>
          <img
            src="/woman.jpg"
            alt="woman on computer"
            className="rounded-md"
          />
        </div>
        <div className=" flex flex-col gap-1">
          <div className="bg-emerald-700 font-JetBrains rounded-full flex justify-center items-center w-20 text-white text-sm">
            <p>Neovim</p>
          </div>
          <h2 className="font-bold text-xl">Divorce your IDE</h2>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-400">
          The real blue pill you need for better code refactoring
        </p>
        <p className="font-sans text-sm text-blue-200">📖 2 min read</p>
      </div>
    </section>
  );
}
