
import { H, H2, Hprops, P } from "./emacsItch";
import { Image, Avatar, TableOfContents } from "./template";
import { Quote } from "./vimInThrees";

export function Intermidiate() {
  return (
    <section className=" flex justify-center ">
      <BlogPost />
      <TableOfContents content={["ctrl-i/ctrl-o", "oldfiles", "zero mark"]} />
    </section>
  );
}

export const BlogPost = () => {
  return (
    <div className="flex w-screen items-center p-4 flex-col gap-4 lg:w-3/4 md:w-3/4">
      <H>Intermidiate Jumping in vim</H>
      <div className="lg:w-1/2 flex ">
        <Avatar date="07 April, 2025" />
      </div>
      <div className="flex flex-col gap-4 lg:w-1/2 md:w-1/2 sm:w-10/12 sm:p-3">
        <Image imagelink={"intermediate.jpg"} />

        <P>
          File navigation in vim is the penacle of human evolution. This past week as I read the user manual I discovered some suprisingly new tricks:


          <ul className="flex flex-col font-bold items-start px-7 list-disc">
            <li>ctrl-i/ctrl-o</li>
            <li>oldfiles</li>
            <li>zero mark</li>
          </ul>
        </P>
        <div className="flex justify-center items-center ">

          <Image imagelink={"oldfiles.png"} />
        </div>
        <P>
          <H2 id="ctrl-i/ctrl-o">CTRL-I/CTRL-O</H2>

          Vim keeps the points you have been moving to using the goto commands, search files commands and even number+jk commands.
          These are called jumps. You can see your jumps when you run the command <Keymap>:jumps</Keymap>.


        </P>
        <P>
          The jumps are stacked and can be visited back and forth.
          One could visit the jumps using <Keymap>ctrl-i</Keymap> and <Keymap>ctrl-o</Keymap> keys combos. Using <Keymap>ctrl-i</Keymap> to go to the newest jump and <Keymap>ctrl-o</Keymap> to go to the older jumps.
        </P>
        <P>

          I like to think of this like my trail of breadcrumbs on how I have been moving incase I get lost in the codebase.
        </P>
        <P>
          Fun fact: <Keymap>ctrl-i</Keymap> is equivalent to <Keymap>TAB
          </Keymap>       </P>
        <P>

          <H2 id="oldfiles">Oldfiles</H2>

          Vim tracks your file movement in jumps. A sibling command to <Keymap>:jumps</Keymap> is <Keymap>:oldfiles.</Keymap> oldfiles are simply previously edited files or jumped-to files. When you run  <Keymap>:oldfiles</Keymap> vim
          lists your file movement.This sometimes might be similar to your <Keymap>:jumps</Keymap>        </P>
        <P> <Keymap>:jumps</Keymap> and <Keymap>:oldfiles</Keymap> are siblings in the way that they both can be used to jump around files. In <Keymap>:oldfiles,</Keymap> You tie the command with browse.
          After browsing your editing history with <Keymap>:oldfiles.</Keymap>         </P>
        <P>You run <Keymap>:browse oldfiles</Keymap> and write the file number to be opened.
          You will obtain the filenumber by viewing the oldfile list
        </P>
        <P>

          <H2 id="zero mark">zero mark</H2>
          This is less of a navigation mechanisim and more of a todo! after openig a previously opened file.
          To understand the zero mark  <Keymap>'0</Keymap> you need a background knowledge of  <Keymap>:marks</Keymap>.
        </P>

        <div className="p-4 md:px-4 lg:px-4">
          <Quote
            words={"A mark is a file benchmark. Marks create a landing that you can call at anypoint in file and the cursor will fly to it. Marks can be local or global. Uppercase for global folder declaration and lowercase for local file. One uses m to create the benchmark calls it using the aprostophe "}
            sayer={""}
          />
        </div>
        <P>
          The  <Keymap>'0</Keymap> is a cursor call to the last point where you were before you exited the file. It is a default mark, one doesn't set it upon start.
          It is a good navigation feature that allows you track previous position and pickup where you left.

        </P>

        <P>


          <H2 id="References">References</H2>
          <ul className="flex flex-col gap-2 font-bold items-start px-7 list-disc">
            <li> <Keymap>:h oldfiles</Keymap></li>
            <li> <Keymap>:h marks</Keymap></li>
            <li> <Keymap>:h ctrl-i</Keymap></li>
            <li> <Keymap>:h jumps</Keymap></li>
          </ul>

        </P>

        <P>
          Happy hacking !!
          P.S, my typing speed is improving .

        </P>
      </div>
    </div >
  );
};

function Keymap({ children }: Hprops) {
  return (
    <span className="font-mono bg-slate-300 dark:bg-everbg text-pink-800 dark:text-pink-700 px-1 py-1 rounded">{children}</span>
  )
}
