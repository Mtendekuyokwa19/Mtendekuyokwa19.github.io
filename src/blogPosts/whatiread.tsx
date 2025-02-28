import { H, H2, P } from "./emacsItch";
import { Image, Avatar, TableOfContents, CodeBlockDemo } from "./template";
import { Quote } from "./vimInThrees";
import { A } from "./whyNeovim.tsx"

export function WhatIread() {
  return (
    <section className=" flex justify-center w-fit">
      <BlogPost />
      <TableOfContents content={["Understanding lsps", "vim's sister", "Golden config", "Chris & Thiago"]} />
    </section>
  );
}

export const BlogPost = () => {
  const code = `
  vim.api.nvim_set_hl(0, "LineNrAbove", { fg = "#51B3EC", bold = true })
  vim.api.nvim_set_hl(0, "LineNr", { fg = "white", bold = true })
  vim.api.nvim_set_hl(0, "LineNrBelow", { fg = "#FB508F", bold = true })
 `
  return (
    <div className="flex items-center p-3 flex-col gap-4 lg:w-3/4 md:w-3/4">
      <H>What I read, this week</H>
      <div className="lg:w-1/2 flex ">
        <Avatar date="28 February, 2025" />
      </div>
      <div className="flex flex-col gap-4 lg:w-1/2 md:w-1/2 sm:w-10/12 sm:p-3">
        <Image imagelink={"whatiread.webp"} />

        <div className="p-4 md:p-0 lg:p-0">
          <Quote
            words={"The only thing that neovim got right, was the website"}
            sayer={"Bram moolenaar"}
          />
        </div>
        <P>
          I have been following closely on a bunch of updates on (neo)vim related and just wanted to air out the cool stuff I discovered.
          This type of blog post format/style has been inspired by some VC, <A link="https://chamath.substack.com/">chamath </A>. I kinda liked the format to be honest.
          Out of the all the reads, I will simply pull out the neovim related ones from the noise because thats what tickles my wits.
        </P>
        <P>
          <H2 id="Understanding lsps">Understanding LSPs</H2>

          This is a <A link="https://packagemain.tech/p/understanding-the-language-server-protocol?share=">post</A> by Alex pliutau about Language server protocols. The topic of lsps is one that every new neovim user is introduced from the get-go.
          I originally had a wrap around on what lsps are; which simply put <em>is a way to get autocomplete and goto functionality like vscode extensitions for languages.</em>
          This definition was not that far from the truth but it does miss some points. Alex's blog post goes deeper into this and enravles more on the architecture of lsps and different complexity problems with the old initial methods  of getting autocomplete and goto functionality without general lsps
          and provides diagrams for them
        </P>



        <P>
          <H2 id="vim's sister">Vim's sister</H2>

          In a recent discussion on <A link="https://news.ycombinator.com/item?id=43070125">hacker news</A> someone mentioned to me the text editor ad. This is also written in rust like helix(rust bros doing the most). I tried it out and holy smokes!! I didn't expect it to be this different from vim.
          The author said that it is much more inspired by vi and less of vim so I understand.
          I plan to be writting my commit messages in ad to try it out to understand more of its philosopy
          <A link="https://sminez.dev/ad-an-adaptable-text-editor/"> blog link</A>
        </P>

        <P>
          <H2 id="Golden config">Golden config</H2>

          I added  cool new config lines to my init.lua and I have been enjoying it. The config lines work with mostly relative numbers where the colors of the lines are independent from theme.
          The line above the current cursor line are blue and the ones below are pink. This improves visual ability to jump around using line numbers as some themes make the line colors super dim
          <CodeBlockDemo lang="js" codeblock={code} />


        </P>

        <P>
          <H2 id="Chris & Thiago">Chris and thiago</H2>

          Maybe I am a fan of drama naturally, I feel like the argument between chris and thiago is equivalent to current linux-rust wars lol.<A link="https://geoff.greer.fm/2015/01/15/why-neovim-is-better-than-vim/">Here </A>
          Chris, the new lead on the vim project and thiago have an argument on vim vs neovim.
          initially geoff states about his patches getting rejected and vim having the worst C code(I think this is not true)
          It is a very interesting read as it explains the argument on why neovim grew from the get-go from thiago himself.
        </P>

        <P>I must say, it has been a fairly interesting week.Eitherway I hope they add rust to the linux kernel. Happy hacking!!!!</P>


        <P>P.S, I am thinking of learning rust but I am scared.</P>
      </div>
    </div>
  );
};
