/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

type Props = {
  iconName: string;
  title: string;
  personalityLastNames: string[];
  overview: string;
  playtime: number;
};

export default function header(props: Props) {
  return (
    <div class={tw`mt-4 p-6 rounded-[10px] border-4 border-[#9FA6ED]`}>
      <div class={tw`flex flex-row justify-start`}>
        <img
          src={`/${props.iconName}_3d.png`}
          alt={props.iconName}
          class={tw`h-8`}
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
