import React from "react";
import { Button } from "@headlessui/react";

import {
  TbBrandGithub,
  TbFolderHeart,
  TbBrandAdobeIndesign,
  TbBrandAdobeIllustrator,
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandReact,
  TbBrandVite,
  TbBrandTypescript,
  TbBrandFigma
} from "react-icons/tb";

type AboutProps = {
  onNavigate: (section: "about" | "projects" | "contact" | "splash") => void;
};

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="about-page h-full grow">
      <div className="flex justify-between py-2">
        <a
          href="https://github.com/alisamfp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center rounded p-2 gap-1 md:gap-2 text-stone-900 hover:bg-[#006666] hover:text-stone-100"
        >
          <TbBrandGithub className="text-3xl" />
          View My GitHub
        </a>
        <div className="inline-block min-h-[1em] w-0.5 self-stretch bg-[#003333]"></div>
        <Button
          onClick={() => onNavigate("projects")}
          className="flex items-center flex-row-reverse rounded p-2 gap-1 md:gap-2 text-stone-900 
        data-hover:bg-[#006666] data-hover:text-stone-100">
          <TbFolderHeart className="text-3xl" />
          View My Portfolio
        </Button>
      </div>
      <section className="about-me grid grid-cols-1 md:grid-cols-2 mb-4 gap-y-2 p-4">
        <h2 className="font-bold text-3xl">Hello There!</h2>
        <p className="text-2xl">The name's Alisa <span className="text-xs inline-block">(pronounced&nbsp;uh-lee-suh)</span></p>
        <img
          src="./images/meow-wolf-portrait.jpg"
          alt=""
          className="w-80 self-center justify-self-center md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-6 md:pr-4"
        />
        <p>
          I’m a loud mouthed lover of cats, code, and creativity. I’m passionate
          about intuitive design, free and open source software, and
          accessibility.
        </p>
        <p className="md:col-span-full lg:col-start-2">
          In my free time I love playing video games and being out in nature. If
          it’s raining, I’m outside.
        </p>
      </section>
      <section className="about-experience rounded-md md:border md:border-gray-300 p-4 mb-4">
        <h2 className="font-bold text-2xl">Experience</h2>
        <p>
          I previously worked at <a className="no-underline text-[#003333] border-b-2 border-transparent hover:border-[#003333]" href="https://octoblu.com">Octoblu</a> as a
          software engineer for 3 years writing full stack JavaScript. Prior to
          that I have experience as a senior game advisor at GameStop an on-air
          personality with Geekssocciated Press and volunteering with HeatSync
          Labs. In 2013, I was accepted into Recurse Center for their Summer batch.
        </p>
      </section>
      <section className="about-skills flex flex-col gap-4 rounded-md md:border md:border-gray-300 p-4">
        <h2 className="font-bold text-2xl">Skills and Technologies</h2>
        <section className="grid grid-cols-[2fr_1fr]">
          <h3 className="col-span-full font-semibold">re: Design</h3>
          <p>
            I’m proficient in the Adobe suite of products, especially InDesign
            and Illustrator. I also use Figma quite a bit.
          </p>
          <dl className="flex flex-col md:grid md:grid-cols-3 gap-4 md:col-[2/3] md:justify-self-center text-3xl p-1">
            <div className="flex flex-col items-center text-center">
              <dt className="sr-only">Adobe InDesign</dt>
              <dd>
                <TbBrandAdobeIndesign aria-label="Adobe InDesign" />
              </dd>
            </div>
            <div className="flex flex-col items-center text-center">
              <dt className="sr-only">Adobe Illustrator</dt>
              <dd>
                <TbBrandAdobeIllustrator aria-label="Adobe Illustrator" />
              </dd>
            </div>
            <div className="flex flex-col items-center text-center">
              <dt className="sr-only">Figma</dt>
              <dd>
                <TbBrandFigma aria-label="Figma" />
              </dd>
            </div>

          </dl>
        </section>
        <section className="grid grid-cols-[2fr_1fr]">
          <h3 className="col-span-full font-semibold">re: Development</h3>
          <p>
            I prefer front-end and working with HTML, CSS, and JavaScript.
            This website was made in TypeScript with React, Tailwind, and Vite.
          </p>

          <dl className="grid grid-cols-2 md:grid-cols-3 gap-4 md:col-[2/3] md:justify-self-center text-3xl p-1">
            <div className="flex flex-col items-center text-center">
              <dt className="sr-only">JavaScript</dt>
              <dd className="">
                <TbBrandJavascript aria-label="JavaScript" />
              </dd>
            </div>
            <div className="flex flex-col items-center text-center">
              <dt className="sr-only">TypeScript</dt>
              <dd className="">
                <TbBrandTypescript aria-label="Typescript" />
              </dd>
            </div>
            <div className="flex flex-col items-center text-center">
              <dt className="sr-only">HTML5</dt>
              <dd>
                <TbBrandHtml5 aria-label="HTML5" />
              </dd>
            </div>
            <div className="flex flex-col items-center text-center">
              <dt className="sr-only">CSS3</dt>
              <dd>
                <TbBrandCss3 aria-label="CSS3" />
              </dd>
            </div>
            <div className="flex flex-col items-center text-center">
              <dt className="sr-only">React</dt>
              <dd>
                <TbBrandReact aria-label="React" />
              </dd>
            </div>
            <div className="flex flex-col items-center text-center">
              <dt className="sr-only">Vite</dt>
              <dd>
                <TbBrandVite aria-label="Vite" />
              </dd>
            </div>
          </dl>
        </section>
      </section>
    </div>
  );
};

export default About;
