/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Switcher from "../islands/Switcher.tsx";
import H1 from "../components/H1.tsx";
import NowPlaying from "../islands/NowPlaying.tsx";

export default function Home() {
  return (
    <div
      class={tw`text-[#45454D] overflow-scroll`}
      style={{
        "overflow-scrolling": "touch",
        "height": "100svh",
        "touch-action": "manipulation",
      }}
    >
      <div class={tw`fixed top-0 w-full px-6 pt-6 pb-4 bg-white`}>
        <a
          class={tw`text-[#9FA6ED] font-bold text-sm active:underline`}
          href="/"
        >
          &lt; TOP
        </a>
        <div class={tw`mt-2`} />
        <NowPlaying isCompact={true} />
        <div class={tw`mt-2`} />
        <H1 text="Switcher"></H1>
      </div>
      <div id="top" />
      <div
        class={tw`p-6 mx-auto max-w-screen-md flex flex-col justify-between`}
      >
        <div class={tw`mt-[161px]`} />
        <Switcher />
      </div>
    </div>
  );
}
