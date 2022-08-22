/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Personality } from "../types/Personality.ts";

type Props = {
  personalities: Personality[];
};

export default function PersonalityCard(props: Props) {
  return (
    <div class={tw`overflow-hidden text-ellipsis whitespace-nowrap`}>
      {props.personalities.map((personality) => (
        <div class={tw`flex flex-row mt-4`}>
          <img
            src={`/${personality.imageName}.jpeg`}
            alt={"t-rex"}
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
