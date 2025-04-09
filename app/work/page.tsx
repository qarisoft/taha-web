"use client";
// import {Card, CardBody, CardFooter, Image} from "@heroui/react";
import { title } from "@/components/primitives";
import App from "@/components/work";
import { Card, CardBody, CardFooter } from "@heroui/card";

// import {Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
import { Image } from "@heroui/image";
import { useState } from "react";
import "./s.css";
const dd = {
  folder: "0",
  images: [
    "photos/0/0.jpg",
    "photos/0/1.jpg",
    "photos/0/2.jpg",
    "photos/0/3.jpg",
    "photos/0/4.jpg",
    "photos/0/5.jpg",
    "photos/0/6.jpg",
    "photos/0/7.jpg",
    "photos/0/8.jpg",
  ],
};

import data from "./data.json";
export default function BlogPage() {
  return (
    <div className="">
      <div className="text-4xl  p-4 mb-4 rounded">أعمالنا</div>
      {/* <App /> */}
      {data.map((d) => (
        <div className="" key={d.folder}>
          <div className="px-10">
            <div className="">اسم المشروع</div>
            <div className="text-sm">وصف المشروع</div>
            <div className="text-sm">
              ......... ............. ............. ......... .............
              ............. ......... ............. ............. .........
              ............. .............
            </div>
          </div>
          <Carosul w={d} />
          <div className="h-10"></div>
        </div>
      ))}
    </div>
  );
}

type Wrk = {
  folder: string;
  images: string[];
};
// const data =
function Carosul({ w }: { w: Wrk }) {
  const images = w.images;
  const [main, setMain] = useState(images[0]);

  return (
    <div className="w-screen flex justify-center relative carosul-container my-4">
      <div className="carosul-container-hover shadow bg-slate-40 absolute  opacity-75 bottom-0 w-[80%] b h-[30%] p-1 gap-2 flex overflow-auto">
        {images.map((m) => (
          <CardImage key={m} setImage={setMain} img={m} />
        ))}
      </div>
      <div
        style={{
          backgroundImage: "url(" + main + ")",
        }}
        className="bg-black w-[80%] lg:h-96  aspect-video bg-cover bg-no-repeat bg-center"
      ></div>
    </div>
  );
}

function CardImage({
  img,
  setImage,
}: {
  img: string;
  setImage: (m: string) => void;
}) {
  return (
    <div
      onClick={() => setImage(img)}
      style={{
        backgroundImage: "url(" + img + ")",
      }}
      className="aspect-video h-full bg-slate-300 rounded  bg-cover bg-no-repeat "
    ></div>
  );
}
