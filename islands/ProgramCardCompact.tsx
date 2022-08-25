/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Program } from "../types/Program.ts";
import { memo } from "preact/compat";

type Props = {
  program: Program;
  clap: number;
  handleOnClick: (id: number) => Promise<void>;
};

const ProgramCardCompact = (props: Props) => {
  return (
    <div>
      <div class={tw`flex flex-row justify-between items-center`}>
        <div class={tw`flex flex-row justify-start items-start max-w-[200px]`}>
          <div class={tw`font-bold`}>{props.program.title}</div>
        </div>

        <div class={tw`flex flex-row justify-start items-center`}>
          <div class={tw`flex flex-row items-center mr-2 mt-2`}>
            <span class={tw`text-2xl font-bold`}>
              {props.clap}
            </span>
            <span class={tw`ml-1 mt-2 text-xs`}>claps!</span>
          </div>

          <img
            src={`/clapping_hands_3d.png`}
            alt={props.program.iconName}
            class={tw`h-10 transition-all active:scale-[2] duration-100`}
            loading="lazy"
            onClick={() => props.handleOnClick(props.program.id)}
            onTouchStart={(e) => ""}
          />
        </div>
      </div>
      <div class={tw`h-[1px] w-full bg-[#E9E9EA] rounded-full mt-4`} />
    </div>
  );
};

const ProgramCardCompactMemo = memo(ProgramCardCompact);

export default ProgramCardCompactMemo;
