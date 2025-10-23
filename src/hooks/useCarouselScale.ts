"use client";

import * as React from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { teamMembers } from "@/data/team";

export function useCarouselScale() {

  const [api, setApi] = React.useState<CarouselApi>();
  const [_, setCurrent] = React.useState(0);
  const [scaleValues, setScaleValues] = React.useState<number[]>(
    teamMembers.map((_, i) => (i === 0 ? 1 : 0.75))
  );

  const onScroll = React.useCallback(() => {
    if (!api) return;

    const selectedIndex = api.selectedScrollSnap();

    const newScaleValues = teamMembers.map((_, index) => {
      // Calculate the distance from current selected slide
      let distance = index - selectedIndex;
      
      // Handle loop wrapping
      const totalSlides = teamMembers.length;
      if (distance > totalSlides / 2) {
        distance -= totalSlides;
      } else if (distance < -totalSlides / 2) {
        distance += totalSlides;
      }

      // Apply scale based on distance
      const absDistance = Math.abs(distance);
      
      if (absDistance === 0) {
        return 1; // Center slide
      } else if (absDistance === 1) {
        return 0.85; // Adjacent slides
      } else {
        return 0.75; // Other slides
      }
    });

    setScaleValues(newScaleValues);
    setCurrent(selectedIndex);
  }, [api]);

  const onSelect = React.useCallback(() => {
    if (!api) return;
    onScroll();
  }, [api, onScroll]);

  React.useEffect(() => {
    if (!api) return;

    // Initial setup
    onScroll();
    
    // Listen to events
    api.on("scroll", onScroll);
    api.on("select", onSelect);
    api.on("reInit", onScroll);

    return () => {
      api.off("scroll", onScroll);
      api.off("select", onSelect);
      api.off("reInit", onScroll);
    };
  }, [api, onScroll, onSelect]);

  return { api, setApi, scaleValues };
}
