"use client";
// import {Card, CardBody, CardFooter, Image} from "@heroui/react";
import { title } from "@/components/primitives";
import { Card, CardBody, CardFooter } from "@heroui/card";
import svg1 from "../../public/services/1.svg";
import svg2 from "../../public/services/2.svg";
import svg3 from "../../public/services/3.svg";
import svg4 from "../../public/services/4.svg";
import svg5 from "../../public/services/5.svg";
import svg6 from "../../public/services/6.svg";
import svg7 from "../../public/services/7.svg";
import svg8 from "../../public/services/8.svg";
import svg9 from "../../public/services/9.svg";
// import {Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
import Image from "next/image";
import "./css.css";
import { PropsWithChildren } from "react";

export default function BlogPage() {
  const list = [
    {
      title: "أعمال صرف المطر",
      img: svg1,
      price: "$5.50",
    },
    {
      title: "أعمال الصرف",
      img: svg2,
      price: "$3.00",
    },
    {
      title: "أنشاء وتأسيس العبارات وصيانتها",
      img: svg3,
      price: "$10.00",
    },
    {
      title: "صيانة الطرق",
      img: svg4,
      price: "$5.30",
    },
    {
      title: "أعمال الزراعة والتشجير",
      img: svg5,
      price: "$15.70",
    },
    {
      title: "أعمال المياة",
      img: svg6,
      price: "$8.00",
    },
    {
      title: "أنشاء وتأسيس الطرق",
      img: svg7,
      price: "$7.50",
    },
    {
      title: "اعمال الكهرباء",
      img: svg8,
      price: "$7.50",
    },
    {
      title: "تأسيس صرف الطرق",
      img: svg9,
      price: "$7.50",
    },
  ];
  return (
    <div className="flex flex-col justify-center w-full px-10">
      <div className="text-4xl shadow p-4 mb-4 rounded">خدماتنا</div>
      <div className="grid md:grid-cols-2 gap-4">
        {list.map((item, index) => (
          <CardComponent src={item.img} key={index} title={item.title}>
            <div className="">{item.title}</div>
          </CardComponent>
        ))}
      </div>
    </div>
  );
}

function CardComponent({
  src,
  children,
  title,
}: PropsWithChildren<{ src: string; title: string }>) {
  return (
    <div className="flip-card mx-auto md:mx-4  rounded-lg">
      <div className="flip-card-inner">
        <div className="flip-card-front rounded-md">
          <Image
            src={src}
            alt="Avatar"
            className="rounded-sm"
            style={{ width: "200", height: "200" }}
          />
          <div className="-translate-y-4">{title}</div>
        </div>
        <div className="flip-card-back rounded-md flex items-center justify-center text-gray-700 font-semibold bg-[url(/back2.png)] bg-cover">
          {children}
        </div>
      </div>
    </div>
  );
}
