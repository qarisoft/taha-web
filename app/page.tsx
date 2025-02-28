import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import BgLogo from '@/components/images/bg-logo.png'
import TitleBgLogo from '@/components/images/logo-title.png'
export default function Home() {
  return (
      <>
        <div className="absolute w-screen h-screen top-0 left-0  bg-[url(../components/images/3.jpg)] bg-cover">dasdas</div>
        <div className="absolute w-screen h-screen top-0 left-0 bg-slate-400  dark:bg-slate-950 opacity-80"></div>

        <div className="absolute w-screen h-screen top-0 left-0 overflow-y-scroll">

          <div className="h-screen flex flex-col gap-5 justify-center items-center  py-14">
          <Image alt="" height={40} src={BgLogo} width={250} />
          <Image alt="" height={40} src={TitleBgLogo} width={450} />
          </div>
          <div className="w-full h-screen flex flex-1 flex-col gap-4  pt-0">
          <div className="grid auto-rows-min gap-10 md:grid-cols-3 lg:gap-40 px-10">
            <div className="">

            <div className="h-[40rem] rounded-xl bg-white shadow shadow-slate-400 bg-[url(/devices/balance.jpg)] bg-contain bg-no-repeat bg-center" />
            <div className="dasd">dsadasd asd asd as dasda</div>
            </div>
            
            
            <div className="h-[40rem] rounded-xl bg-white shadow shadow-slate-400 bg-[url(/devices/total.jpg)] bg-contain bg-no-repeat bg-center" />
            <div className="h-[40rem] rounded-xl bg-white shadow shadow-slate-400 bg-[url(/devices/gps.jpg)] bg-contain bg-no-repeat bg-center" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>

        </div>

      
      </>
  );
}








function Comp() {
  return <div className="flex flex-col items-center justify-center ">
        <div className="inline-block max-w-xl text-center justify-center  my-auto">
        <span className={title({ color: "blue" })}>مؤسسة خالد علي حسين الكبيشي</span>
        <br />
        <br />
        <span className={title()}>للمقاولات العامة</span>
      </div>
      <div className="h-10"></div>
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
          اعمالنا
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          {/* <GithubIcon size={20} /> */}
          تواصل معنا
        </Link>
      </div>
  
  </div>
}