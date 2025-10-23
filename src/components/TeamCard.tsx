"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

const TeamCard = ({ name, role, image }: TeamCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const memberSlug = name.toLowerCase().replace(/\s+/g, '-');

  return (
    <div
      className={cn(
        "cursor-pointer transition-all duration-300 overflow-hidden rounded-lg",
        isHovered && "scale-105"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden rounded-lg shadow-lg bg-transparent text-white transition-all duration-300 relative">
        {/* Fancy border on hover */}
        <div
          className={cn(
            "absolute inset-0 rounded-lg transition-all duration-300 pointer-events-none z-10",
            "bg-gradient-to-br from-white/20 via-transparent to-white/10",
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
          style={{
            padding: "2px",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        <CardContent className="p-0 relative">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={name}
              width={400}
              height={533}
              className={cn(
                "object-cover w-full h-full transition-all duration-500",
                isHovered && "scale-110 blur-sm brightness-50"
              )}
            />
            {/* Dark overlay for text readability, disappears on hover */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300",
                isHovered && "opacity-0"
              )}
            />
            {/* Dark overlay on hover */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 transition-opacity duration-300",
                isHovered ? "opacity-100" : "opacity-0"
              )}
            />

            {/* Content always visible */}
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="flex-1" />
              <h3
                className={cn(
                  "text-2xl font-bold mb-1 select-none transition-all duration-300",
                  isHovered && "opacity-0"
                )}
              >
                {name}
              </h3>
              <p
                className={cn(
                  "text-accent text-lg select-none transition-all duration-300",
                  isHovered && "opacity-0"
                )}
              >
                {role}
              </p>
            </div>

            {/* Expanded content on hover - overlay on image */}
            {isHovered && (
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 py-4">
                <p className="text-sm text-gray-100 mb-4">
                  Learn more about {name}
                </p>
                <a
                  href={`/member/${memberSlug}`}
                  className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors active:scale-95 text-sm"
                >
                  View Profile →
                </a>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamCard;
