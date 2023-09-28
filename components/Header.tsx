/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/src/runtime/head.ts";

type Props = {
  handleOnClick: (id: string) => void;
};

export default function header(props: Props) {
  const title = "YosLab M2 Radio 2023";
  const description = "吉野研M2ラジオ2023の紹介ページ";
  const url = "https://yoslab-radio.deno.dev/";
  const image = "https://yoslab-radio.deno.dev/og.png";

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta property="fb:app_id" content="437291081699971" />
      </Head>
      <header
        class={tw`w-full p-6 h-16 bg-[#9FA6ED] text-white flex flex-row items-center font-black fixed z-50`}
      >
        <img
          src={"/radio_3d.png"}
          alt="radio icon"
          class={tw`h-8`}
          loading="lazy"
        />
        <a class={tw`ml-2 mt-1`} onClick={() => props.handleOnClick("top")}>
          YosLab M2 Radio 2022
        </a>
      </header>
    </div>
  );
}
