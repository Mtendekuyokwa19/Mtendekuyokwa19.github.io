import { Link } from "react-router-dom";

export function TableOfContents({ content }: ITOC) {
  return (
    <div className="lg:fixed top-32 right-72 md:hidden hidden lg:flex flex-col gap-2">
      <p className="dark:text-emerald-300 text-emerald-600 text-lg">
        On this page
      </p>
      <div className="flex flex-col gap-2 border-t-3 border-indigo-50">

        {content.map((item: string) =>

          <a
            className="text-slate-500 dark:text-slate-300 font-bold"
            href={"#" + item}
          >{item}</a>
        )}

      </div>
    </div>
  );
}
interface Iavatar {
  date: string

}
export function Avatar({ date }: Iavatar) {
  return (
    <div className="flex gap-2 ">
      <div>
        <img src="/header.jpg" alt="me" className="h-12 rounded-full" />
      </div>
      <div>
        <p className="font-JetBrains ">Mtende Kuyokwa</p>

        <p className="text-slate-600 dark:text-slate-300 font-mono text-sm">
          {date}
        </p>
      </div>
    </div>
  );
}
interface ITOC {
  content: string[]

}
export class Card {
  link: string
  imgsrc: string
  title: string
  description: string
  tagTitle: string
  tagColor: string
  tagmin: number
  constructor(link: string, imgsrc: string, title: string, description: string, tagTitle: string, tagColor: string, tagmin: number) {

    this.link = link
    this.imgsrc = imgsrc
    this.title = title
    this.description = description
    this.tagTitle = tagTitle
    this.tagColor = tagColor

    this.tagmin = tagmin
  }
}
interface Icard {
  details: Card
}
export function BlogcardTemplate({ details }: Icard) {
  return (
    <Link to={"/" + details.link} className="flex justify-center items-center">
      <section className="md:w-full w-3/4 h-full justify-center items-center ">
        <div className="flex dark:hover:bg-everNav p-2 flex-1 rounded-md hover:bg-slate-200 transition ease-in-out dalay-150  flex-col w-72 gap-2 font-Quicksand ">
          <div>
            <img
              src={"/" + details.imgsrc}
              alt="woman on computer"
              className="rounded-md h-56"
            />
          </div>
          <div className=" flex flex-col gap-1">
            <div className={`bg-${details.tagColor}-700 font-JetBrains rounded-full flex justify-center items-center w-20 text-white text-sm`}>
              <p>{details.tagTitle}</p>
            </div>
            <h2 className="font-bold text-xl">{details.title}</h2>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-400">{details.description}</p>
          <p className="font-sans text-sm text-blue-600 dark:text-blue-200">
            📖 {details.tagmin} min read
          </p>
        </div>
      </section >
    </Link >
  );
}
interface Iimage {
  imagelink: string
}
export function Image({ imagelink }: Iimage) {
  return (
    <div className="w-fit p-3 lg:p-0 md:p0">
      <img src={"/" + imagelink} alt="" />
    </div>
  );
}
