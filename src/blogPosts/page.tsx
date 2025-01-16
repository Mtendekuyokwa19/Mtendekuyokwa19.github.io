import { ReactNode } from "react";
import { Footer } from "../Home";

export function Post() {
  return (
    <section className=" flex h-dvh justify-center w-fit">
      <BlogPost />
      <TableOfContents />
    </section>
  );
}

function TableOfContents() {
  return (
    <div className="fixed top-32  right-72 flex flex-col gap-2">
      <p className="dark:text-emerald-300 text-emerald-600 text-lg">
        On this page
      </p>
      <div className="flex flex-col gap-2 border-t-3 border-indigo-50">
        <a className="font-bold" href="">Introduction</a>
        <a href="">Main goal</a>
        <a href="">conclusion</a>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="w-fit">
      <img src="/woman.jpg" alt="" />
    </div>
  );
}
export const BlogPost = () => {
  return (
    <div className="flex items-center flex-col gap-4 w-3/4">
      <H>
        THE MAN FROM UNCLE
      </H>
      <div className="w-1/2 flex ">
        <Avatar />
      </div>
      <div className="flex flex-col gap-4 w-1/2">
        <Image />
        <P>
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
    <section className="flex gap-2 rounded-md justify-center flex-col items-center">
      <h2 className="font-JetBrains font-extrabold text-4xl">
        {children}
      </h2>

      <div className="w-96 bg-catNav h-0.5"></div>
    </section>
  );
}
function P({ children }: Hprops) {
  return (
    <div className="text-slate-700 dark:text-slate-400">
      <p>{children}</p>
    </div>
  );
}
function Avatar() {
  return (
    <div className="flex gap-2 ">
      <div>
        <img src="/header.jpg" alt="me" className="h-12 rounded" />
      </div>
      <div>
        <p className="font-Quicksand">Mtende Kuyokwa</p>

        <p className="text-slate-600 dark:text-slate-100 font-Quicksand text-sm">
          2 days ago .
        </p>
      </div>
    </div>
  );
}
