import { ReactNode } from "react";

import { P } from "./emacsItch.tsx"
export function WhyNeovim() {
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
          href="#we_sell_leverage"
        >
          We sell leverage
        </a>
        <a
          className="text-slate-500 dark:text-slate-300 font-bold"
          href="#ai_will_play_a_part"
        >
          AI will play a role
        </a>
        <a
          className="text-slate-500 dark:text-slate-300 font-bold"
          href="#we_have_vim_plugins_in_our_ides"
        >
          No,Thank you
        </a>

        <a
          className="text-slate-500 dark:text-slate-300 font-bold"
          href="#vim_is_charityware"
        >
          vim is charityware
        </a>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="w-fit p-3 lg:p-0 md:p0">
      <img src="/woman.jpg" alt="" />
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
      <H>
        THE WORLD MIGRATES TO NEOVIM
      </H>
      <div className="lg:w-1/2 flex ">
        <Avatar />
      </div>
      <div className="flex flex-col gap-4 lg:w-1/2 md:w-1/2 sm:w-10/12 sm:p-3">
        <Image />
        <P>
          Neovim as technology is bound to become as mainstream as the vsCode,
          JetBrains and even sublime. Yes, it has a lot of users but not as many
          as the vsCode users. As the technology is growing and Multiplying its
          daily users every year more people will come through to patch up what
          holds the technology back.
        </P>

        <div className="p-4 md:p-0 lg:p-0">
          <Quote
            words={"Give me a lever long enough and a fulcrum on which to place it, and I shall move the world"}
            sayer={"Archimedes"}
          />
        </div>
        <P>
          <H2 id="we_sell_leverage">We sell leverage</H2>

          Leverage is the ability of your actions to be multiplied a
          thousandfold. This has been something Vim has been selling since its
          birth. Leverage is why people use software, code or use AI. People
          want to do less but still achieve more. As humans, we have been
          looking for shortcuts since the dawn of time. Shortcuts are called
          innovation.
        </P>

        <P>
          <H2 id="ai_will_play_a_part">AI will play a part</H2>

          With Microsoft giving out the copilot to the vscode bros for free, the
          devs will edit more and write less. Vim's strongest ability is being
          the best tool to manipulate text. Better editing will be demanded all
          across the board and Vim will fill the needs.
        </P>

        <P>
          <H2 id="we_have_vim_plugins_in_our_ides">
            We have vim plugins in our IDEs. NO thank you
          </H2>

          Well, for a person to have a good understanding of the Vim plugin they
          need to use Vim for a month or so. Being in the native Vim or Neovim
          is way better than the plugin as you getter performance and all the
          guns in the toolbox.
        </P>

        <P>
          <H2 id="vim_is_charityware">
            Vim is charityware
          </H2>

          When you first open vim it greats you will the words "help poor
          children in Uganda". This is one of the reasons I stayed when I was
          using Vim. The fact that main goal was to help people outside devs who
          may or may not have used vim before. (fyi I linked iccf holland at the
          donate button at the footer) I have not seen much charityware, vim was
          the first one.
          <A
            link={"https://photos.google.com/share/AF1QipO7A4tWDjnDpZ8vZbsB5_No5j9A72PSWy_-p8np3bLKiq3Spq0WmrcQC64DZzb0Pg?pli=1&key=N1VTekZYNjZENWtjMFVQcGVfWFQ3WDhqOXFNQldB"}
          >
            This Google highlight still amazes me
          </A>
        </P>
      </div>
    </div>
  );
};
type Hprops = {
  children: ReactNode;
};
function H({ children }: Hprops) {
  return (
    <section className="flex gap-2 rounded-md flex-col items-center">
      <h2 className="font-JetBrains font-extrabold lg:text-4xl md:text-2xl text-md">
        {children}
      </h2>

      {/* <div className="w-96 bg-catNav h-0.5"></div> */}
    </section>
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

        <p className="text-slate-600 dark:text-slate-300 font-mono text-sm">
          18 January,2025
        </p>
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
interface IA {
  children: string;
  link: string;
}
function A({ children, link }: IA) {
  return (
    <div className="text-blue-700 lg:text-lg text-md dark:text-blue-400">
      <a href={link}>{children}</a>
    </div>
  );
}
