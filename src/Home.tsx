import { BlogcardTemplate, Card } from "./blogPosts/template.tsx"
import {
  IoLogoDiscord,
  IoLogoMedium,
  IoLogoTwitter,
  // IoSearch,
} from "react-icons/io5";
import { H2 } from "./blogPosts/whyNeovim";

const valentine = new Card("vimafterlife", "afterlife.jpg", "vim, the afterlife", "roads to walk in after finishing vim tutor, how each road will affect you", "Neovim", "green", 1, "Feb 14")

const emacsitch = new Card("emacsitch", "emacs.png", "The emacs itch? ", "A rant on being stuck between the emacs world and the vim world", "Neovim", "green", 1.2, "Feb 8")

const worldandvim = new Card("theworldmigratestoneovim", "woman.jpg", "The world migrates to neovim", "why the world will soon move to neovim. Explaining how you are playing a part", "Neovim", "green", 1.2, "Jan 18")
const viminthrees = new Card("viminthrees", "preview2.png", "Vim in threes", "A dive into workflows, tricks and zellij,the multiplexer", "Neovim", "green", 1.2, "Jan 24")
export default function Home() {
  const postcards = [valentine, emacsitch, viminthrees, worldandvim]
  return (
    <div className="md:min-h-lvh lg:min-h-lvh">

      <section className="md:p-4 w-auto my-4 md:my-0 flex flex-col  items-center">
        <H2 id={""}>All Posts.</H2>
        <div className="lg:gap-y-10 p-2 md:p-0 w-screen md:w-8/12 gap-5 lg:grid md:flex md:gap-2 grid-flow-row grid-cols-1 sm:grid-cols-3 grid-rows-2 md:py-3 sm:py-9 flex flex-col">
          {postcards.map(card => <BlogcardTemplate details={card} />)}

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


