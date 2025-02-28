import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className=" flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full  ">
      <div className="absolute h-screen w-screen top-0 bg-slate-400 opacity-20 bg-[url(../components/images/3.jpg)] bg-cover"></div>
      <div className="inline-block max-w-xl text-center justify-center  my-auto">
        {/* <span className={title()}>Make&nbsp;</span> */}
        <span className={title({ color: "blue" })}>مؤسسة خالد علي حسين الكبيشي</span>
        <br />
        <br />
        {/* <br /> */}
        <span className={title()}>
          للمقاولات العامة
        </span>
        {/* <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div> */}
      </div>
{/* 
      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    </section>
  );
}
