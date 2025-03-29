import { H, H2, P } from "./emacsItch";
import { Image, Avatar, TableOfContents, CodeBlockDemo } from "./template";
import { Quote } from "./vimInThrees";

export function ManPages() {
  return (
    <section className=" flex justify-center ">
      <BlogPost />
      <TableOfContents content={["Exploring the man", "Purists and community", "Kitty litter"]} />
    </section>
  );
}

export const BlogPost = () => {
  const bash = ` $ rustup doc --book`
  const setfiletype = `:setfiletype=html`
  const vimManual = `:h user-manual`
  return (
    <div className="flex w-screen items-center p-4 flex-col gap-4 lg:w-3/4 md:w-3/4">
      <H>read the man pages</H>
      <div className="lg:w-1/2 flex ">
        <Avatar date="29 March, 2025" />
      </div>
      <div className="flex flex-col gap-4 lg:w-1/2 md:w-1/2 sm:w-10/12 sm:p-3">
        <Image imagelink={"manpages.webp"} />

        <div className="p-4 md:p-0 lg:p-0">
          <Quote
            words={"The magic you are looking for is in the work you are avoid"}
            sayer={"Dipen parmar"}
          />
        </div>
        <P>
          In a recent read, OSTEP —operating systems in three easy steps—, I came across the phrase RTMP — read the man pages—  for when someone asks
          basic questions that were already dissolved in the manual.
          It reminded me of how I dodged reading the nvim user manual. Just like Rust has its documentation to be read
          offline, so does nvim. For rust it is in the browser whilst nvim it is in the lovely terminal.

        </P>
        <P>          In Rust, you fire the book up by running.
        </P>
        <CodeBlockDemo lang="javascript" code={bash} />
        <P>In vim you simply</P>
        <CodeBlockDemo lang="javascript" code={vimManual} />
        <P>
          <H2 id="Exploring the man">Exploring the man</H2>

          When using Vim, I try to do everything with the least amount of keystrokes. A moment where keystrokes where wasted is when
          I used CTRL-U to look for where I last edited especially if the text is not unique enough to use search. I discovered I could use CTRL-I and CTRL-O to jump around which is cool and keeps the keypresses to a minimal. Another cool thing I discovered was that for EJS —the templating engine—  one could change the
          filetype to HTML so that you get syntax  highlighting and utilize the HTML LSP since EJS does not
          have one.I might sound dramatic but I stood up and applauded after finishing this sub-chapter.
        </P>

        <CodeBlockDemo lang="javascript" code={setfiletype} />
        <P>
          I still do not recommend reading the man pages as soon
          after reading :TUTOR because newly learnt nvim motions will be forgotten without practice as you spend more time learning about them than using them. Practice builds game.
        </P>


        <P>
          <H2 id="Purists and community">Purists and community</H2>
          A Purist is someone who has a traditional way of doing things and enforces it on others. I would say in the nvim community <p className="italic inline text-emerald-700 dark:text-emerald-300">"Do not use lazyvim until you can create your config from scratch"</p>  is one common purist comment just as <p className="italic inline text-emerald-700 dark:text-emerald-300" >"no doom-emacs until you can create a config in vanilla-emacs"</p>.
          I hated this statement because I used lazyvim soon after finishing vim-tutor. After reminiscing, I have realized that I lack skin in the game with nvim and If I were to contribute to it
          I wouldn't know what to do because I hardly understand its internal philosophy. There is no dodging the ball. It might seem as if you are slowing down building it from scartch but it pays off
          in the long run. I am planning to work on mine from scratch —not kickstarter.nvim—  this weekend and see how it goes.
        </P>

        <P>
          <H2 id="Kitty litter">Kitty litter</H2>

          A couple of weeks ago, I picked up rust for school. One thing I try to do when I am learning something new, is to surround myself with the technology to reduce procrastination.
          In the wake of this habit, I migrated from kitty to the rust's wezterm.
          wezterm is nice in terms of configuring with Lua but Kitty is faster on my hardware so I had to go back.
          This statement is just a note if there is a terminal war anywhere, kitty is 0.06ms faster.


        </P>



        <P>
          Happy hacking !!
          P.S, new neovim 0.11  looks nice can't wait to try it out

        </P>
      </div>
    </div>
  );
};
