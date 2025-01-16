import {
  IoLogoDiscord,
  IoLogoMedium,
  IoLogoTwitter,
  IoSearch,
} from "react-icons/io5";

export default function Home() {
  return (
    <div>
      <Search />
      <section className="w-auto flex justify-center">
        <div className="gap-y-10 gap-x-5 grid  grid-flow-row grid-cols-3 grid-rows-2  py-9">
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
        <p>Contact</p>
        <div className="flex gap-2">
          <div>
            <IoLogoTwitter size={20} />
          </div>

          <div>
            <IoLogoMedium size={20} />
          </div>

          <div>
            <IoLogoDiscord size={20} />
          </div>
        </div>
        <p>Donate</p>
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
