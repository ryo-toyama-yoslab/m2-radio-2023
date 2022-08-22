/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useEffect, useRef, useState } from "preact/hooks";

type Props = {
  iconName: string;
  title: string;
  personalityLastNames: string[];
  overview: string;
  playtime: number;
  isTransition: boolean;
};

export default function header(props: Props) {
  const targetRef = useRef(null);
  const [displayStyle, setDisplayStyle] = useState("");

  useEffect(() => {
    if (!props.isTransition) return;
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
      class={tw`mt-4 p-6 rounded-[10px] border-4 border-[#9FA6ED] transition-all duration-500 ease-out ${displayStyle}`}
      ref={targetRef}
    >
      <div class={tw`flex flex-row justify-start`}>
        <img
          src={`/${props.iconName}_3d.png`}
          alt={props.iconName}
          class={tw`h-8`}
          loading="lazy"
        />
        <div class={tw`flex flex-col ml-6`}>
          <div class={tw`text-xl font-bold`}>{props.title}</div>
          <div class={tw`text-xs text-[#9FA6ED] mt-1`}>
            {props.personalityLastNames.join(" / ")}
          </div>
        </div>
      </div>
      <div class={tw`text-sm mt-6`}>{props.overview}</div>
      <div class={tw`flex justify-end font-bold text-sm mt-6`}>
        {props.playtime}分
      </div>
    </div>
  );
}
