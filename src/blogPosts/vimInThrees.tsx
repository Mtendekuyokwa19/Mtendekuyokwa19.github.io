import { ReactNode } from "react";
// import { Footer } from "../Home";
import { P } from "./emacsItch.tsx"
export function VimInThrees() {
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
          href="#viminthrees"
        >A new trick</a>
        <a
          className="text-slate-500 dark:text-slate-300 font-bold"
          href="#a_philosophical_vim_lesson"
        >A philosophical lesson</a>
        <a
          className="text-slate-500 dark:text-slate-300 font-bold"
          href="#zellij"
        >Zellij, you beauty</a>

      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="w-fit p-3 lg:p-0 md:p0">
      <img src="/workflow.png" alt="" />
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
    <div className="flex dark:bg-everbg items-center p-3 flex-col gap-4 lg:w-3/4 md:w-3/4">
      <H>Vim in threes</H>
      <div className="lg:w-1/2 flex ">
        <Avatar />
      </div>
      <div className="flex flex-col gap-4 lg:w-1/2 md:w-1/2 sm:w-10/12 sm:p-3">
        <Image />

        <div className="p-4 md:p-0 lg:p-0">
          <Quote
            words={"It's still magic even if you know how it's done."}
            sayer={"Terry Pratchett"}
          />
        </div>
        <P>I think I have discovered another super remmap in vim. Moving a highlighted
          paragraph was usually done by having to "dd" and then "p" which was cool, but for
          something that was moving one/ two lines above it was too many keystrokes for
          the great egornomic vim.

        </P>
        <P>I recollect that in <A children={"VsC*de"} link={"https://www.reddit.com/r/ProgrammerHumor/comments/104wsvz/this_unbiased_post_was_created_by_the_the_vscode/"} />  we had "ALT-up" to move the line up and "AlT-down" to
          do the opposite.Reviewing the almighty vim manual I discovered th "m" cmd.Here is a stackoverflow post on <A children={"this"} link={"https://stackoverflow.com/questions/7501092/can-i-map-alt-key-in-vim"} />
        </P>
        <div className="text-slate-300 flex p-4 md:p-0 lg:p-4 rounded flex-col items-center bg-slate-950 ">


          <code>

            map("n", "M-k", ":m .-2CR")


          </code>
          <code>

            map("n", "M-k", ":m .-2CR")
          </code>
        </div>
        <P>
          <H2 id="a_philosophical_vim_lesson">A philosophical vim lesson</H2>

          I spent the greater part of the year trying to get people to use linux desktop and I
          managed to get about 6 people. When I later discovered vim I tried getting
          everyone on here because the workflow was golden. I wasn't as lucky as I only
          managed to get one(the person actually got bored reading vimtutor and quit
          apparently so zero)
        </P>
        <P>


          In a recent discussion in the neovim <A children={"subreddit"} link={"https://www.reddit.com/r/neovim/comments/1i5u1zh/intoducing_neovim_to_other_people_how_did_it_go/m86rf39/"} />, I learnt that you have to accept
          people and their weird devflows because neither you would want to leave their
          editor so why should they. It is oK to bring it up but do not nag them about it.
          Technology is a means not an end.
        </P>


        <P>
          <H2 id="zellij">Zellij, you beauty</H2>

          Out of the box most <A children={" vim chads"} link={"https://www.reddit.com/r/programminghumor/comments/ubo08q/vimchad/"} />, pair their workflow with tmux. I tried it out
          but I didn't see the point since kitty was able to split my terminal perfectly
          (boy was I wrong). I later tried out zellij after I saw it in one of <A children={" dhh's"} link={" https://en.wikipedia.org/wiki/David_Heinemeier_Hansson"} />
          workflows(a person also mentioned it in the neovim unofficial channel). The fact
          that it comes with vim bindings out of the box meant I will not have that big of
          a learning curve.
          The default layouts are  great. I still dream of trying tmux with this new multiplexing knowledge lol

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
    <section id="viminthrees" className="flex gap-2 rounded-md flex-col items-center">
      <h2 className="font-JetBrains font-extrabold lg:text-4xl md:text-2xl text-xl">
        {children}
      </h2>

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
          24 January,2025
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
    <a className="text-blue-700 lg:text-lg text-md dark:text-blue-400" href={link}>{children}</a>
  );
}

