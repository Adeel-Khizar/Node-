"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../libs/utils";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import { previousWork } from "@/constants";
import Link from "next/link";

export function PorjectCards() {

  return (
    <div className="h-auto bg-white relative  flex items-center justify-center">
      <div className="PreviousWork p-[5vw]">
      {
        previousWork.map((item) => (
          <div>
            <Link href={item.url}>
          <DirectionAwareHover  imageUrl={item.Imgurl}>
        <h2 className="font-bold text-2xl">{item.title}</h2>
        <p className="font-normal text-sm">{item.description}</p>
      </DirectionAwareHover>
      </Link>
          </div>
        ))
      }
      
      </div>
   
    </div>
  );
}
