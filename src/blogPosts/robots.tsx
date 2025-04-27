import { H, H2, P } from "./emacsItch";
import { Image, Avatar, TableOfContents } from "./template";
import { Quote } from "./vimInThrees";

export function Vimforrobotics() {
  return (
    <section className=" flex justify-center ">
      <BlogPost />
      <TableOfContents content={["Neovim not vim", "ssh not ssshhh", "vanilla vim"]} />
    </section>
  );
}

export const BlogPost = () => {
  return (
    <div className="flex w-screen items-center p-4 flex-col gap-4 lg:w-3/4 md:w-3/4">
      <H>Vim for robotics</H>
      <div className="lg:w-1/2 flex ">
        <Avatar date="27 April 2025" />
      </div>
      <div className="flex flex-col gap-4 lg:w-1/2 md:w-1/2 sm:w-10/12 sm:p-3">
        <Image imagelink={"robots.webp"} />

        <div className="p-4 md:p-0 lg:p-0">
          <Quote
            words={"Do not take your life too seriously"}
            sayer={"Naval"}
          />
        </div>
        <P>
          Over the past week I was working on a robot for a competition. The microcontroller I was using was a Raspberry Pi 3. This is probably the most faith testing microcontroller of all time.

        </P>
        <P>

          Previously, the only microcontroller I had worked with was an Arduino nothing major just some light blinking of lights type of projects in class. Outside class, I didn't even play with Arduino so my microcontroller knowledge
          was shaky.         </P>
        <P>
          Spoiler alert, I ended up using the Arduino for the robot I was building for the competition  because the pi3 died on me.

        </P>
        <P>
          <H2 id="Neovim not vim">Neovim not vim</H2>

          After sudo upgrading the piOS, I installed Neovim even though vim was avalaible. I did this for the pettiest reason, neovim has a change in cursor shape for insert and normal mode. I am a simple man and this is all I wanted.
        </P>
        <P>

          I wanted to install kickstart.nvim but It is a bulky config for the pi and I wanted to keep my setup as minimal as possible. This led to me using neovim in its vanilla form. One of my todos might be to build a special Raspberry pi neovim config that is light. It will be some sort of xfce of neovim distros/enviroments
        </P>



        <P>
          <H2 id="ssh as ssshhh">ssh as ssshhh</H2>
          I learnt some cool things about ssh-ing into computers.  It was fun when I set it up and had to use it with Windows.
          I was using a Windows computer in its vanilla form, no wsl, and managed to ssh in my pi3.         </P>
        <P>Having installed neovim, I used it as the editor in the terminal/cmd and it was weird how I could not use my mouse to switch between my terminal-windows. Luckily, my so not-almighty brain
          remembered about the CTRL-W trick. I could also resize my terminal-windows with a mouse.
        </P>
        <P>

          <H2 id="vanilla vim">vanilla vim</H2>

          This windows-vim experience made me realise that I could use Vim without any plugins and still be OK. In late March and early April, I read the Vim user manual. This paid a thousandfold when I was using nvim from
          a Raspberry Pi SSH port. I managed to get window splitting in Windows cmd and it was the coolest thing.



        </P>
        <P>

          It felt weird writing Python code without LSP support though. It was like living in the caveman days.
        </P>


        <P>
          My team didn't win but that is OK-- I had a chance to use a Raspberry pi for the first time with vim in the mix, Life doesn't get cooler than that.
        </P>
      </div>
    </div >
  );
};
