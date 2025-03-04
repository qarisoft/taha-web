import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import BgLogo from "@/components/images/bg-logo.png";
import DarkBgLogo from "@/components/images/dark-bg-logo.png";
import TitleBgLogo from "@/components/images/logo-title.png";
import DarkTitleBgLogo from "@/components/images/black-logo-title.png";

import Pattern from "@/components/images/pattern.png";
import { PropsWithChildren } from "react";
import { Button } from "@heroui/button";
const basePath = "";

import balance from "../public/devices/balance.jpg";
import total from "../public/devices/total.jpg";
import gps from "../public/devices/gps.jpg";

export default function Home() {
  return (
    <>
      <div className="absolute w-screen h-screen top-0 left-0  bg-[url(../components/images/3.jpg)] bg-cover">
        dasdas
      </div>
      <div className="absolute w-screen h-screen top-0 left-0 bg-slate-400  dark:bg-slate-950 opacity-80"></div>

      <Hero />
    </>
  );
}

function Hero() {
  return (
    <div className="absolute w-screen h-screen top-0 left-0 overflow-y-scrol">
      <div className="h-screen flex flex-col gap-5 justify-center items-center  py-14">
        <div className=" flex-col justify-center items-center hidden dark:flex">
          <Image alt="" height={40} src={BgLogo} width={250} />
          <Image alt="" height={40} src={TitleBgLogo} width={450} />
        </div>

        <div className="flex flex-col justify-center items-center dark:hidden">
          <Image alt="" height={40} src={DarkBgLogo} width={250} />
          <Image alt="" height={40} src={DarkTitleBgLogo} width={350} />
        </div>
        <Button className="" variant="solid" color="primary" type="button">
          اعمالنا
        </Button>
      </div>

      <Devices />
    </div>
  );
}

function Devices() {
  return (
    <div className="w-full h-screen flex flex-1 flex-col gap-4  pt-20 relative overflow">
      {/* <div className="absolute z-0 top-0 left-0 -translate-x-40 ">
    <Image alt="" height={400}  src={Pattern} width={400} />
    
  </div> */}

      <div className="px-20 py-5 mb-10 bg-[#025d5e] text-white rounded w-fit text-2xl lg:text-3xl">
        <h1>بيان بالاجهزة المساحية لدى المؤسسة</h1>
      </div>

      <div className="h-[30rem] bg-slate-300  flex overflow-scroll  p-5 gap-10  lg:px-40  text-black">
        <Container>
          {/* <div
            className={`h-[40rem]  bg-[url(/devices/balance.jpg)] bg-contain bg-no-repeat bg-center`}
          ></div> */}
          <Image
            src={balance}
            height={200}
            width={180}
            alt=""
            className="fle my-auto"
          />
          <div className="inline">
            <h1 className="text-center  text-xl"> Balance Level Device </h1>
            <h1 className="text-center  text-xl"> جهاز ليفل مساحي </h1>
          </div>
        </Container>

        <Container>
          {/* <div
            className={`h-[40rem]  bg-[url(/devices/total.jpg)] bg-contain bg-no-repeat bg-center`}
          /> */}
          <Image src={total} height={240} width={180} alt="" />
          <div className="">
            <h1 className="text-center"> Station Total Device </h1>
            <h1 className="text-center  text-xl"> جهاز توتال ستيشن </h1>
          </div>
        </Container>
        <Container>
          {/* <div
            className={`h-[40rem]  bg-[url(/devices/gps.jpg)] bg-contain bg-no-repeat bg-center`}
          /> */}
          <Image src={gps} height={240} width={160} alt="" />
          <div className="">
            <h1 className="text-center  text-xl"> Gps Device </h1>
            <h1 className="text-center  text-xl"> جهاز حي بي اس </h1>
          </div>
        </Container>
      </div>
    </div>
  );
}

function Container({ children }: PropsWithChildren) {
  return (
    <div className="p-5 rounded-xl bg-white shadow shadow-slate-400 flex flex-col items-center  min-w-72 justify-between">
      {children}
    </div>
  );
}

function Comp() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="inline-block max-w-xl text-center justify-center  my-auto">
        <span className={title({ color: "blue" })}>
          مؤسسة خالد علي حسين الكبيشي
        </span>
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
  );
}
