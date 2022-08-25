/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Header from "../components/Header.tsx";
import H1 from "../components/H1.tsx";
import NowPlaying from "../islands/NowPlaying.tsx";
import ChatList from "../islands/ChatList.tsx";

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
      <div class={tw`fixed top-0 w-full p-6 bg-white`}>
        <a
          class={tw`text-[#9FA6ED] font-bold text-sm active:underline`}
          href="/"
        >
          &lt; TOP
        </a>
        <div class={tw`mt-2`} />
        <NowPlaying isCompact={true} />
        <div class={tw`mt-2`} />
        <H1 text="Chat"></H1>
      </div>
      <div id="top" />
      <div
        class={tw`p-6 mx-auto max-w-screen-md flex flex-col justify-between`}
      >
        <div class={tw`mt-[169px]`} />
        <ChatList />
      </div>
      <div
        class={tw`w-full p-6 h-16 bg-[#9FA6ED] text-white
        flex flex-row items-center font-black fixed bottom-0 z-50`}
      >
        form!
      </div>
    </div>
  );
}
