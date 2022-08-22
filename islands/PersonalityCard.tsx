/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useEffect, useRef, useState } from "preact/hooks";
import { Personality } from "../types/Personality.ts";

type Props = {
  personalities: Personality[];
};

export default function PersonalityCard(props: Props) {
  const targetRef = useRef(null);
  const [displayStyle, setDisplayStyle] = useState("");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setDisplayStyle(
        entry.isIntersecting ? "opacity-1 visible" : "opacity-0 invisible",
      );
    }, options);

    if (targetRef.current) observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, [targetRef]);

  return (
    <div
      class={tw`overflow-hidden text-ellipsis whitespace-nowrap transition-all duration-700 ease-out ${displayStyle}`}
      ref={targetRef}
    >
      {props.personalities.map((personality) => (
        <div class={tw`flex flex-row mt-4`}>
          <img
            src={`/${personality.imageName}.jpg`}
            alt={`/${personality.imageName}`}
            class={tw`block w-16 h-16 rounded-full border-2 border-[#9FA6ED]`}
            loading="lazy"
          />
          <div class={tw`flex flex-col ml-4`}>
            <div class={tw`text-xl font-bold`}>
              {personality.LastName + " " + personality.firstName}
            </div>
            <div class={tw`text-sm`}>{personality.overview}</div>
            <div class={tw`text-xs text-[#9FA6ED]`}>
              {"#" + personality.join.join(" #")}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
