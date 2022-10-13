/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

type Music = {
  title: string;
  artist: string;
};

const musics: Music[] = [
  {
    title: "The Power Of Love",
    artist: "Huey Lewis & The News",
  },
];

export default function Music() {
  return (
    <div>
      {musics.map((music, index) => {
        return (
          <div class={tw`flex flex-col relative`}>
            <div class={tw`text-[#9FA6ED] text-xl font-bold`}>
              {music.title}
            </div>
            <div class={tw`text-[#9FA6ED] text-sm font-bold`}>
              {music.artist}
            </div>
            <div
              class={tw`absolute right-0 text-[#9FA6ED] text-4xl opacity-[0.3]`}
            >
              {index + 1}
            </div>
          </div>
        );
      })}
    </div>
  );
}
