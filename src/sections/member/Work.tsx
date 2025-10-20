"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

type Project = {
  image: string;
  title?: string;
  description?: string;
  link?: string;
};

type Props = {
  projects?: Project[];
};

export default function Work({ projects = [] }: Props) {
  const [index, setIndex] = useState(0);

  const items = useMemo(() => projects || [], [projects]);

  useEffect(() => {
    if (items.length === 0) return;
    if (index < 0) setIndex(items.length - 1);
    else if (index >= items.length) setIndex(0);
  }, [index, items.length]);

  const prev = useCallback(() => {
    if (items.length <= 1) return;
    setIndex((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  const next = useCallback(() => {
    if (items.length <= 1) return;
    setIndex((i) => (i + 1) % items.length);
  }, [items.length]);

  const leftIndex = items.length > 0 ? (index - 1 + items.length) % items.length : 0;
  const rightIndex = items.length > 0 ? (index + 1) % items.length : 0;

  return (
    <section className="w-full mt-12" id="works">
      <div className="w-full bg-gradient-to-b from-gray-800 to-gray-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-center text-xl md:text-2xl font-bold tracking-widest uppercase">My Works</h3>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              aria-label="previous"
              onClick={prev}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/6 hover:bg-white/10 focus:bg-white/10 text-white/80 hover:text-white transition-colors duration-200"
            >
              <span className="text-2xl leading-none">‹</span>
            </button>

            <div className="flex items-center justify-center gap-6">
              {items.length > 1 && (
                <div className="w-16 h-16 sm:w-28 sm:h-28 rounded-md overflow-hidden opacity-70 transform transition-all duration-300 ease-out scale-95 hover:scale-100">
                  <Image src={items[leftIndex].image} alt={items[leftIndex].title || "project"} width={128} height={128} className="object-cover w-full h-full" />
                </div>
              )}

              <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-md overflow-hidden shadow-lg ring-2 ring-white/20 transform transition-all duration-300">
                <button onClick={next} className="w-full h-full block">
                  <Image src={items[index]?.image || '/images/projects/DEFAULT/DEFAULT.png'} alt={items[index]?.title || "project"} width={208} height={208} className="object-cover w-full h-full" />
                </button>
              </div>

              {items.length > 2 && (
                <div className="w-16 h-16 sm:w-28 sm:h-28 rounded-md overflow-hidden opacity-70 transform transition-all duration-300 ease-out scale-95 hover:scale-100">
                  <Image src={items[rightIndex].image} alt={items[rightIndex].title || "project"} width={128} height={128} className="object-cover w-full h-full" />
                </div>
              )}
            </div>

            <button
              aria-label="next"
              onClick={next}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/6 hover:bg-white/10 focus:bg-white/10 text-white/80 hover:text-white transition-colors duration-200"
            >
              <span className="text-2xl leading-none">›</span>
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {items.length === 0 ? (
              <p className="text-sm text-white/80">No projects to show.</p>
            ) : (
              items.map((_, i) => (
                <button
                  key={i}
                  aria-label={`go-to-${i}`}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${i === index ? "bg-white/80 scale-110" : "bg-white/40"}`}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="w-full rounded-md overflow-hidden shadow-md transform transition-all duration-500 ease-in-out">
              <Image src={items[index]?.image || '/images/projects/DEFAULT/DEFAULT.png'} alt={items[index]?.title || "project"} width={1200} height={600} className="object-cover w-full h-64 md:h-96 opacity-95" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{items[index]?.title || "Untitled Project"}</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">{items[index]?.description || "No description available."}</p>
            {items[index]?.link ? (
              <a href={items[index]!.link} target="_blank" rel="noreferrer" className="inline-block mt-2 text-blue-600 underline">Visit GitHub repository</a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
