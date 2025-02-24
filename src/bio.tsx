import { H2, Language } from "./lists"

export function Bio() {

  return (
    <article className="flex flex-col gap-6 p-4 lg:p-0 items-center md:min-h-lvh lg:min-h-lvh">
      <Header />
      <section className="lg:flex justify-between lg:w-1/2 w-full">


        <Techstack />
        <Frameworks />
      </section>
      <section className="lg:flex justify-between w-full lg:w-1/2">

        <Miscellenous />
        <Databases />
      </section>
    </article>
  )
}

function Header() {


  return (
    <section className="lg:w-1/2 lg:mt-24 mt-12 " >
      <H2 >Mtende Kuyokwa</H2>
      <section className="font-mono text-sm lg:text-md text-left text-slate-700 dark:text-slate-500 ">

        <p> I am a college student at the Malawi university of business and applied science, studying Information Technology.</p>
        <p>(Neo)vim has been one of my latest obsession in the sea of technology. Outside web software I have worked on robots at RoboticsFoundationMalawi</p>
        <p>When I am not pushing to github, I am usually listening to podcasts like the linux after dark or the all-in podcast.</p>

      </section>
    </section>
  )
}
function Databases() {
  const languagegrp1 = ["Postgres", "MySQL"]

  let position = 0
  return (

    <section className="w-1/2" >

      <H2 >Databases</H2>

      <section className="font-mono text-left text-slate-500 flex gap-8 ">
        <div>
          {languagegrp1.map(language => {
            position++
            return <Language language={language} position={position} />
          }
          )
          }
        </div>

      </section>
    </section>
  )

}
function Techstack() {
  const languagegrp1 = ["Typescript", "Javascript", "Java", "C++"]

  const languagegrp2 = ["HTML", "CSS", "SQL"]
  let position = 0
  return (

    <section className="" >

      <H2>Languages</H2>

      <section className="font-mono  text-left text-slate-500 flex gap-4 lg:gap-8 ">
        <div>
          {languagegrp1.map(language => {
            position++
            return <Language language={language} position={position} />
          }
          )
          }
        </div>

        <div>
          {languagegrp2.map(language => {
            position++
            return <Language language={language} position={position} />
          }
          )
          }
        </div>
      </section>
    </section>
  )

}

// function Stats() {
//
//
//   return (
//
//     <section className="w-1/2 h-1/2 " >
//
//       <H2 >Github Stats</H2>
//
//       <section className="font-mono text-left text-slate-500 flex gap-8 ">
//         <Stat stat={511} statitle={"contributions"} />
//         <Stat stat={4} statitle={"open source contibutions"} />
//         <Stat stat={87} statitle={"repositories"} />
//
//       </section>
//     </section>
//   )
//
// }
// interface Istat {
//   stat: number
//   statitle: string
//
// }
// function Stat({ stat, statitle }: Istat) {
//   return (
//     <section>
//       <p className="text-lg">{stat}+</p>
//
//       <p>{statitle}</p>
//
//     </section>
//
//   )
//
//
// }
function Miscellenous() {
  const languagegrp1 = ["Git", "Github", "npm", "webpack", "vite"]

  const languagegrp2 = ["Vscode", "postman", "Linux", "Vim"]
  let position = 0
  return (

    <section className="w-1/2 h-1/2 " >

      <H2>Miscellenous</H2>

      <section className="font-mono text-left text-slate-500 flex lg:gap-8 gap-4 ">
        <div>
          {languagegrp1.map(language => {
            position++
            return <Language language={language} position={position} />
          }
          )
          }
        </div>

        <div>
          {languagegrp2.map(language => {
            position++
            return <Language language={language} position={position} />
          }
          )
          }
        </div>
      </section>
    </section>
  )

}
function Frameworks() {
  const languagegrp1 = ["Nodejs", "Expressjs", "Reactjs", "Ejs", "jest", "vitest"]

  const languagegrp2 = ["Tailwindcss", "Nextjs", "React-Router"]
  let position = 0
  return (

    <section className="lg:w-1/2 lg:h-1/2 " >

      <H2>Frameworks</H2>

      <section className="font-mono text-left text-slate-500 flex gap-4 lg:gap-8 ">
        <div>
          {languagegrp1.map(language => {
            position++
            return <Language language={language} position={position} />
          }
          )
          }
        </div>

        <div>
          {languagegrp2.map(language => {
            position++
            return <Language language={language} position={position} />
          }
          )
          }
        </div>
      </section>
    </section>
  )

}
