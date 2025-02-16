import { H, H2, P } from "./emacsItch";
import { Image, Avatar, TableOfContents } from "./template";
import { Quote } from "./vimInThrees";

export function VimAfterlife() {
  return (
    <section className=" flex justify-center w-fit">
      <BlogPost />
      <TableOfContents content={["vim manual", "practical vim", "Prime+TJ", "Ask for help", "Join the subreddit", "Use vim"]} />
    </section>
  );
}

export const BlogPost = () => {
  return (
    <div className="flex items-center p-3 flex-col gap-4 lg:w-3/4 md:w-3/4">
      <H>Vim, the after-life</H>
      <div className="lg:w-1/2 flex ">
        <Avatar date="14 February, 2025" />
      </div>
      <div className="flex flex-col gap-4 lg:w-1/2 md:w-1/2 sm:w-10/12 sm:p-3">
        <Image imagelink={"afterlife.jpg"} />

        <div className="p-4 md:p-0 lg:p-0">
          <Quote
            words={"They say death comes in threes, how appropriate"}
            sayer={"Pusha T"}
          />
        </div>
        <P>

          I have always considered the 4 days I did vim-tutor(bram wrote 30 mins but it took me longer lol) as the days I died in text editing.
          I resurrected with better text editing ablilities (this is me just trying to be hyperbolic). The idea of modal editing was new to me and I wondered why it wasn't the main way of writing.
          I do not wanna spend explaining how vim is good and all, but just what one might  to do after vim-tutor incase you feel lost
        </P>
        <P>
          <H2 id="vim manual">Vim manual</H2>

          This is one of the recommended roads one needs to take after finishing vim-tutor. This road is short and nice. It is like
          having a book in vim. This can be overlooked but having to use the help option as one reads the manual is nice.
          It also holds updated content that published  books do not have. vim is ever-evolving
        </P>


        <P>
          <H2 id="practical vim">Practical Vim</H2>

          I must confess, I first started reading this book before vim manual. The plus thing about this is the way the book is structured
          For instance, It has help commands when it is explaining a certain concept. This allows you to look through the most important part of the help manual
          The help manual is super big and having to try to peruse each and every part of it will overwhelm you.
          This book is super beginner friendly.

        </P>

        <P>
          <H2 id="prime and tj ">Prime + TJ</H2>

          The two neovim twins, The primegeans and TJ will really help out with most the of basic concepts of vim like motions. They will explain everything for you to
          start using vim.The youtube series have been watched by many and recommended a million times.


        </P>

        <P>
          <H2 id="ask for help">Ask for help</H2>

          vim has the help option which allows you to simply query if you do not understand anything. I recently have been trying to learn rejex, And I have been using
          the help guide. I always underestimated it but now it maybe my favourite vim feature


        </P>

        <P>
          <H2 id="Join the subreddit">Join the subreddit </H2>

          The subreddit is very great for both learning and answering questions. People will post configs, tips and tricks. These make you stumble upon new features that
          could have taken you time to discover.


        </P>
        <P>
          <H2 id="use vim">Use vim</H2>
          It is important that when you are learning vim to use it. Nothing beats skin in the game. You'll discover more features by accident and you will be having
          The aha moment everytime you use it


        </P>

        <P>P.S, Happy valentines nerds</P>
      </div>
    </div>
  );
};
