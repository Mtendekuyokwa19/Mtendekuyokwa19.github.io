export function Post() {
  return (

    <section className=" flex-col flex items-center w-screen">

      <BlogPost />
    </section>
  )

}

export const BlogPost = () => {
  return (
    <div className="flex flex-col gap-2 w-3/4">
      <H>
        THE MAN FROM UNCLE

      </H>
      <Avatar />
      page
    </div>
  )
}

function H({ children }: any) {
  return (
    <section className="flex gap-2 rounded-md justify-center flex-col items-center">
      <h2 className="font-JetBrains font-extrabold text-4xl">


        {children}
      </h2>

      <div className="w-96 bg-catNav h-0.5"></div>
    </section>
  )

}
function Avatar() {
  return (
    <div className="flex gap-2 ">
      <div>

        <img src="/header.jpg" alt="me" className="h-12 rounded" />
      </div>
      <div>
        <p className="font-Quicksand">Mtende Kuyokwa</p>

        <p className="text-slate-600 font-Quicksand text-sm">2 days ago .</p>
      </div>

    </div>


  )

}

