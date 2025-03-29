// @ts-nocheck
import { useEffect } from 'react'
import { useAsciiText, ansiShadow } from 'react-ascii-text';
import { IoLogoDiscord, IoLogoGithub, IoLogoLinkedin, IoLogoMedium, IoLogoTwitter } from 'react-icons/io5';
import { SiArchlinux, SiGit, SiTypescript } from 'react-icons/si';
export function NeovimPage() {
  return (
    <section>


      <div className="flex  h-screen justify-between p-4 ">
        <Siderline />
        <HeaderTag />
      </div>
      <Lualine />
    </section>
  );
}

export function Siderline() {
  const tildes = []
  for (let i = 0; i < 27; i++) {
    tildes.push(<p className='text-sm md:text-md'>~</p>)
  }
  return (
    <section className="flex  flex-col items-stretch h-full ">


      {tildes}
    </section>

  )

}

export function HeaderTag() {
  return (
    <section className="flex-1 flex gap-2 flex-col w-2/3 ">
      <Headername />
      <Jobtitle />
      <LinksToSites />
    </section>

  )
}

export function Headername() {
  return (
    <section className='w-full flex justify-center'>
      <TextName />
    </section>

  )
}
function Jobtitle() {
  return (
    <section className='flex justify-center items-center  md:px-8 md:py-4 '>
      <section className='flex text-black font-JetBrains text-md md:text-2xl  justify-center items-center bg-[#7287fd] px-4 py-2 '>


        <p className='hidden md:inline'>Information Technology student @ MUBAS</p>
        <p className='inline md:hidden'>IT student @ MUBAS</p>
      </section>

    </section>

  )

}

function TextName() {
  const asciiTextRef: React.MutableRefObject<HTMLPreElement | undefined> = useAsciiText({
    animationCharacters: "▒░█",
    animationCharacterSpacing: 1,
    animationDelay: 2000,
    animationDirection: "right",
    animationInterval: 100,
    animationLoop: true,
    animationSpeed: 50,
    font: ansiShadow,
    text: ["MTENDE", "Neovim", "Otis"],
  });

  const asciiTextRef2 = useAsciiText({
    font: ansiShadow,
    text: "Otis",
  });

  return (
    <>

      <pre className='flex md:hidden' ref={asciiTextRef2}></pre>
      <pre className='hidden md:block' ref={asciiTextRef}></pre>
    </>
  )
}

function LinksToSites() {

  const size = 20;
  const links = [
    { name: "github", svg: <IoLogoGithub size={size} />, shorthand: "h", link: "https://github.com/Mtendekuyokwa19" },
    { name: "linkedin", svg: <IoLogoLinkedin size={size} />, shorthand: "l", link: "https://www.linkedin.com/in/mtende-kuyokwa-a71a60241/" },
    { name: "twitter/x", svg: <IoLogoTwitter size={size} />, shorthand: "t", link: "https://x.com/mtende_kuyokwa" },
    { name: "Medium", svg: <IoLogoMedium size={size} />, shorthand: "m", link: "https://medium.com/@mtendekuyokwa19" },
    { name: "discord", svg: <IoLogoDiscord size={size} />, shorthand: "d", link: "https://discord.com/users/1178601817899282602" }
  ]

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'h') {
        window.open(links[0].link)
      }
      else if (e.key === 't') {
        window.open(links[1].link)
      }
      else if (e.key === 'l') {

        window.open(links[2].link)
      }
      else if (e.key === 'm') {

        window.open(links[3].link)
      }
      else if (e.key === 'd') {

        window.open(links[4].link)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])
  return (
    <section className='flex flex-col gap-4 font-JetBrains'>
      {links.map(link => <div tabIndex={0} className='flex justify-evenly items-center text-xl md:px-12 px-3 '><a href={link.link} className='flex md:w-2/6 w-full  items-center justify-between'> <div className='flex gap-2 justify-center items-center'>{link.svg} <p className='capitalize text-[#6c6f85] text-sm md:text-md'>{link.name}</p> </div> <p className='dark:text-[#b5bfe2] text-slate-700 text-sm md:text-md '>{link.shorthand}</p> </a></div>)}
    </section>
  )
}
function Lualine() {

  return (
    <section className='font-JetBrains text-white w-full md:flex hidden justify-between bg-stone-900   items-center'>
      <div className='flex gap-2 items-center bg-blue-400 px-4'>
        <p className=' uppercase text-black font-bold'>normal</p>
        <div className='bg-gray-700 flex gap-2 justify-center py-2 px-2 items-center'><SiGit /> <p>master</p></div>
        <p className='text-black font-mono'>mtende.tsx</p>
      </div>
      <div className='flex gap-2 px-2  items-center   justify-between '>
        <p>utf-8 |</p>
        <SiArchlinux />
        <div className='flex justify-center items-center gap-2'><p>|</p> <SiTypescript /> <p>|</p></div>
        <p>Top</p>
        <div className=' flex-1 h-full'>
          <p>1:1</p>
        </div>
      </div>
    </section>
  )
}
