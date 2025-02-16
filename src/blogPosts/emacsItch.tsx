import { ReactNode } from "react";
// import { Footer } from "../Home";

export function EmacsItch() {
  return (
    <section className=" flex justify-center w-fit">
      <BlogPost />
      <TableOfContents />
    </section>
  );
}

function TableOfContents() {
  return (
    <div className="lg:fixed top-32 right-72 md:hidden hidden lg:flex flex-col gap-2">
      <p className="dark:text-emerald-300 text-emerald-600 text-lg">
        On this page
      </p>
      <div className="flex flex-col gap-2 border-t-3 border-indigo-50">
        <a
          className="text-slate-500 dark:text-slate-300 font-bold"
          href="#looking_back"
        >Looking back</a>
        <a
          className="text-slate-500 dark:text-slate-300 font-bold"
          href="#friction_of_divorce"
        >Friction of divorce</a>
        <a
          className="text-slate-500 dark:text-slate-300 font-bold"
          href="#the_way_forward"
        >The way forward</a>

      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="w-fit p-3 lg:p-0 md:p0">
      <img src="/emacs.png" alt="painting by PQHAUS" />
    </div>
  );
}
interface IH2 {
  children: string | ReactNode;
  id: string;
}
export function H2({ children, id }: IH2) {
  return (
    <h3 id={id} className="font-JetBrains font-extrabold text-xl">
      {children}
    </h3>
  );
}
export const BlogPost = () => {
  return (
    <div className="flex items-center p-3 flex-col gap-4 lg:w-3/4 md:w-3/4">
      <H>The Emacs Itch?</H>
      <div className="lg:w-1/2 flex ">
        <Avatar />
      </div>
      <div className="flex flex-col gap-4 lg:w-1/2 md:w-1/2 sm:w-10/12 sm:p-3">
        <Image />

        <div className="p-4 md:p-0 lg:p-0">
          <Quote
            words={" An itch is a sensation that causes a strong desire or reflex to scratch"}
            sayer={"wikipedia"}
          />
        </div>
        <P>


          I first stumbled over  emacs before I heard about neovim and It was actually a video about vim vs emacs (Now that I have used neovim I think it is useless to argue about this).
          I was simply using emacs to open my powerpoint presentation for class.
          I tried using it to write class notes but it was kinda confusing (Skill issue lol).
          I went back to using libre office for powerpoint powerpoint presentations and obsidian for notes.

        </P>
        <P>
          <H2 id="looking_back">Looking back</H2>

          I wonder now and again  what would have happened if I took the leap to learn emacs. Some part of me feels like I would quit on day two.
          Now that I have a better understanding of Vim, a feeling of missing out of having the "everything editor", emacs nags me. To only have a text editor
          and a browser in my setup. To be as close to my code as possible and yet be able to listen to music in the editor. To allow myself to go down a rabbit hole that I could never
          escape for the rest of my life(this is how a view emacs).
        </P>


        <P>
          <H2 id="friction_divorce">Friction of divorce</H2>

          I think for one the reason I find it hard to try out emacs is that vim is very ergonomic out of the box. I mean when the ed or vi or vim author was building the text editor, they took into account
          of the keyboard real real nice(in joey's voice, from friends).


        </P>

        <P>I do not ever want to leave that. I have contemplated on just using doom emacs but I feel like using doom emacs can be compared to someone with zero vim knowledge starting with lazyvim
          ,you will by default be bound to lazyvim without understanding the foundation of vim.
          Naval ravikant has some quote on this saying "it is better to be a guy who understands basic algebra but doesn't understand calculus than to be a guy who understands calculus but struggles with algebra".
          You may think around this quote like "it has loopholes" but the deal is that foundations are very important with every technology than anything else after.
        </P>
        <P>
          <H2 id="the_way_forward">The way forward</H2>
          Since most people in the congregation of church of emacs state that orgmode is one of the best part of it, I decided to setup neorg which is an emulation/ similar to orgmode I believe. This has somehow scratched
          my itch for the mean time. I am still on the lookout for other emacs emulation on vim to understand emacs philosophy. FYI I wrote this blog post in neorg lol.


        </P>

      </div>
    </div>
  );
};
type Hprops = {
  children: ReactNode;
};
export function H({ children }: Hprops) {
  return (
    <section id="viminthrees" className="flex gap-2 rounded-md flex-col items-center">
      <h1 className="font-JetBrains font-extrabold lg:text-4xl md:text-2xl text-xl">

        {children}
      </h1>

    </section>
  );
}
export function P({ children }: Hprops) {
  return (
    <div className="text-slate-700  text-justify lg:text-md font-mono text-md px-3 dark:text-slate-400">
      <p>{children}</p>
    </div>
  );
}
function Avatar() {
  return (
    <div className="flex gap-2 ">
      <div>
        <img src="/header.jpg" alt="me" className="h-12 rounded-full" />
      </div>
      <div>
        <p className="font-JetBrains ">Mtende Kuyokwa</p>

        <p className="text-slate-600 dark:text-slate-300 font-mono text-sm"> 08 February, 2025</p>
      </div>
    </div>
  );
}

interface IQuote {
  words: string;
  sayer: string;
}
function Quote({ words, sayer }: IQuote) {
  return (
    <div className="dark:bg-everNav bg-catNav p-4 font-Quicksand italic rounded border-l-2 border-emerald-700 dark:border-emerald-300">
      <div>
        {words}
      </div>
      <p>~ {sayer}</p>
    </div>
  );
}
