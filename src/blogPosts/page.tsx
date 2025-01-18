import { ReactNode } from "react";
import { Footer } from "../Home";

export function Post() {
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
        <a className="text-slate-500 dark:text-slate-300 font-bold" href="">
          Introduction
        </a>
        <a className="text-slate-500 dark:text-slate-300 font-bold" href="">
          Main goal
        </a>
        <a className="text-slate-500 dark:text-slate-300 font-bold" href="">
          conclusion
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
}
export function H2({ children }: IH2) {
  return (
    <h3 className="font-JetBrains font-extrabold text-xl">
      {children}
    </h3>
  );
}
export const BlogPost = () => {
  return (
    <div className="flex items-center flex-col gap-4 lg:w-3/4 md:w-3/4">
      <H>
        THE MAN FROM UNCLE
      </H>
      <div className="lg:w-1/2 flex ">
        <Avatar />
      </div>
      <div className="flex flex-col gap-4 lg:w-1/2 md:w-1/2 sm:w-10/12 sm:p-3">
        <Image />
        <div className="p-4 md:p-0 lg:p-0">
          <Quote
            words={"Give me a lever long enough and I will move the earth"}
            sayer={"Archimedes"}
          />
        </div>
        <P>
          This is great because typescript interfaces can extend many
          interfaces, so PropsWithChildren is just one of potentailly many. It
          simplifies your props interface. Overall, I’ll be doing this from now
          on.
        </P>
        <P>
          <H2>Richarch homer</H2>
          This is great because typescript interfaces can extend many
          interfaces, so PropsWithChildren is just one of potentailly many. It
          simplifies your props interface. Overall, I’ll be doing this from now
          on.
        </P>
        <P>
          This is great because typescript interfaces can extend many
          interfaces, so PropsWithChildren is just one of potentailly many. It
          simplifies your props interface. Overall, I’ll be doing this from now
          on.
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
      <h2 className="font-JetBrains font-extrabold lg:text-4xl md:text-2xl text-2xl">
        {children}
      </h2>

      {/* <div className="w-96 bg-catNav h-0.5"></div> */}
    </section>
  );
}
function P({ children }: Hprops) {
  return (
    <div className="text-slate-700 lg:text-lg text-md px-3 dark:text-slate-400">
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
