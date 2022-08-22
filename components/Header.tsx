/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/src/runtime/head.ts";

export default function header() {
  return (
    <div>
      <Head>
        <title>YosLab M2 Radio 2022</title>
        <meta name="viewport" content="width=device-width,minimal-ui" />
      </Head>
      <header
        class={tw`p-6 h-16 bg-[#9FA6ED] text-white flex flex-row items-center font-black`}
      >
        <img
          src={"/radio_3d.png"}
          alt="radio icon"
          class={tw`h-8`}
          loading="lazy"
        />
        <p class={tw`ml-2 mt-1`}>YosLab M2 Radio 2022</p>
      </header>
    </div>
  );
}
