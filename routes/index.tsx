/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <div class={tw`text-[#45454D]`}>
      <header
        class={tw`p-6 h-16 bg-[#9FA6ED] text-white flex flex-row items-center font-black`}
      >
        <img
          src={"/radio_3d.png"}
          alt="radio icon"
          class={tw`h-8`}
        />
        <p class={tw`ml-2 mt-1`}>YosLab M2 Radio 2022</p>
      </header>
      <div class={tw`p-6 mx-auto max-w-screen-md`}>
        hello
      </div>
    </div>
  );
}
