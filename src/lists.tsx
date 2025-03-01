
export function Lists() {

  return (
    <article className="flex flex-col gap-6 items-center p-4 lg:p-0 md:min-h-lvh lg:min-h-lvh">
      <Header />



      <Podcast />
      <Essays />
      <FavouriteBooks />

      <Albums />
    </article>
  )
}
interface IH2 {
  children: string
}
export function H2({ children }: IH2) {


  return <h2 className="lg:text-xl text-lg text-slate-700 dark:text-slate-300 font-mono font-bold">{children}</h2>

}
function Header() {


  return (
    <section className="lg:w-1/2 w-full lg:mt-24 mt-12 " >
      <H2>Lists</H2>
      <section className="font-mono text-left text-sm lg:text-md dark:text-slate-500">

        <p>This is a collection of lists of things I enjoy and what I am reading.</p>
        <p>Take it with a pinch of salt, If I do not list one of your favourites lol</p>

      </section>
    </section>
  )
}
function Podcast() {
  const languagegrp1 = ["Linux after dark", "Pints with aquinas", "Morden wisdom", "Naval podcast"]

  const languagegrp2 = ["Dissect Podcast", "The Joe rogan podcast", "All-in podcast"]
  let position = 0
  return (

    <section className="lg:w-1/2 w-full" >

      <H2>Favourite Podcasts</H2>

      <section className="font-mono text-left text-slate-500 flex lg:flex-row flex-col   lg:gap-8 ">
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
interface ILanguage {
  language: string
  position: number
}
export function Language({ language, position }: ILanguage) {
  return (<section className="flex text-sm lg:text-md gap-2">
    <p className="text-slate-700 lg:text-md text-sm">{"0" + position + "."}</p>
    <p className="text-slate-800 dark:text-slate-400 text-sm lg:text-md">{language}</p>
  </section>)


}

function Albums() {
  const languagegrp1 = ["Good kid m.a.a.d city", "4 your eyez only", "The life of pablo", "Watch the throne", "Blonde", "The Melodic blue", "Her Loss", "Astroworld"]

  let position = 0
  return (

    <section className="lg:w-1/2 w-full lg:h-1/2 " >

      <H2 >Favourite Albums</H2>

      <section className="font-mono text-left text-slate-500 lg:flex gap-8 ">
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
function Essays() {
  const languagegrp1 = ["How to work hard", "How to do great work", "why don't more people move to linux", "why procrastinators procrastinate"]

  let position = 0
  return (

    <section className="lg:w-1/2 w-full lg:h-1/2 " >

      <H2>Favourite Essays</H2>

      <section className="font-mono text-left text-slate-500 lg:flex gap-8 ">
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
function FavouriteBooks() {
  const languagegrp1 = ["The Almanack of Naval Ravikant", "Harry potter and the philosopher's stone", "Practical vim", "Sapiens", "The diary of the wimpy kid(series)", "A catholic? you must be crazy"]

  let position = 0
  return (

    <section className="lg:w-1/2 w-full lg:h-1/2 " >

      <H2 >Favourite Reads</H2>

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
