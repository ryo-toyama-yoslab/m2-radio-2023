/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useEffect, useRef, useState } from "preact/hooks";
import { Program } from "../types/Program.ts";
import { memo } from "preact/compat";

type Props = Program & {
  isTransition: boolean;
  clap: number;
  handleOnClick: (id: number) => Promise<void>;
};

const ProgramCard = (props: Props) => {
  const targetRef = useRef(null);
  const [displayStyle, setDisplayStyle] = useState("");

  useEffect(() => {
    if (!props.isTransition) return;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
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
      class={tw`mt-4 p-6 rounded-[10px] border-4 border-[#9FA6ED] transition-all duration-700 ease-out ${displayStyle}`}
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
      <div class={tw`flex justify-between items-end font-bold text-sm mt-6`}>
        <div class={tw`text-sm font-normal text-[#9B9B9F]`}>
          再生時間：{props.playtime}分
        </div>
        <div class={tw`flex flex-row justify-start items-center`}>
          <img
            src={`/clapping_hands_3d.png`}
            alt={props.iconName}
            class={tw`h-8 transition-all hover:scale-[2] active:scale-[2] duration-300 ease-out`}
            loading="lazy"
            onClick={() => props.handleOnClick(props.id)}
          />
          <div class={tw`flex flex-col ml-2`}>
            <div class={tw`text-2xl font-bold`}>
              {props.clap}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgramCardMemo = memo(ProgramCard);

export default ProgramCardMemo;
