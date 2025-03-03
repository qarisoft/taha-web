"use client";
// import {Card, CardBody, CardFooter, Image} from "@heroui/react";
import { title } from "@/components/primitives";
import App from "@/components/work";
import { Card, CardBody, CardFooter } from "@heroui/card";

// import {Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
import { Image } from "@heroui/image";

export default function BlogPage() {
  return (
    <div className="">
      <div className="text-4xl  p-4 mb-4 rounded">أعمالنا</div>
      <App />
    </div>
  );
}
