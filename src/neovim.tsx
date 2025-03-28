// @ts-nocheck
import { useAsciiText, ansiShadow } from 'react-ascii-text';
import { IoLogoDiscord, IoLogoGithub, IoLogoLinkedin, IoLogoMedium, IoLogoTwitter } from 'react-icons/io5';
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
  for (let i = 0; i < 30; i++) {
    tildes.push(<p>~</p>)
  }
  return (
    <section className="flex  flex-col items-stretch h-full ">


      {tildes}
    </section>

  )

}

export function HeaderTag() {
  return (
    <section className="flex-1 w-2/3">
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
    <section className='flex justify-center items-center  px-8 py-4 '>
      <section className='flex text-black font-JetBrains text-2xl  justify-center items-center bg-[#7287fd] px-4 py-2 '>


        <p>Information Technology student @ MUBAS</p>
      </section>

    </section>

  )

}

function TextName() {
  const asciiTextRef: React.MutableRefObject<HTMLPreElement | undefined> = useAsciiText({
    animationCharacters: "▒░█",
    animationCharacterSpacing: 1,
    animationDelay: 2000,
    animationDirection: "down",
    animationInterval: 100,
    animationLoop: true,
    animationSpeed: 50,
    font: ansiShadow,
    text: ["MTENDE", "Neovim", "Otis"],
  });


  return <pre ref={asciiTextRef}></pre>;
}

function LinksToSites() {
  const links = [
    { name: "github", svg: <IoLogoGithub size={28} />, shorthand: "ggh", link: "https://github.com/Mtendekuyokwa19" },
    { name: "linkedin", svg: <IoLogoLinkedin size={28} />, shorthand: "ggl", link: "https://www.linkedin.com/in/mtende-kuyokwa-a71a60241/" },
    { name: "twitter/x", svg: <IoLogoTwitter size={28} />, shorthand: "ggt", link: "https://x.com/mtende_kuyokwa" },
    { name: "Medium", svg: <IoLogoMedium size={28} />, shorthand: "ggm", link: "https://medium.com/@mtendekuyokwa19" },
    { name: "discord", svg: <IoLogoDiscord size={28} />, shorthand: "ggm", link: "https://discord.com/users/1178601817899282602" }
  ]

  return (
    <section className='flex flex-col gap-4 font-JetBrains'>
      {links.map(link => <section className='flex justify-evenly items-center text-xl px-12 '><a href={link.link} className='flex w-2/6   items-center justify-between'> <div className='flex gap-2'>{link.svg} <p className='capitalize text-[#6c6f85]'>{link.name}</p> </div> <p className='text-[#b5bfe2] '>{link.shorthand}</p> </a></section>)}
    </section>
  )
}
function Lualine() {

  return (
    <section className='w-full'>
      hello

    </section>
  )
}
