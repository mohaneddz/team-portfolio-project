"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import { teamMembers } from "@/data/team";
import { useCarouselScale } from "@/hooks/useCarouselScale";

import TeamCard from "@/components/TeamCard";

export default function TeamCarousel() {
  const { api, setApi, scaleValues } = useCarouselScale();

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full max-w-6xl"
    >
      <CarouselContent className="-ml-4">
        {teamMembers.map((member, index) => (
          <CarouselItem
            key={index}
            className="pl-4 md:basis-1/2 lg:basis-1/3"
        >
            <div
              className="p-1 transition-transform duration-300 ease-out"
              style={{
                transform: `scale(${scaleValues[index] || 0.75})`,
              }}
            >
              <TeamCard
                name={member.name}
                title={member.title}
                image={member.image}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext />

    </Carousel>
  );
}
