/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Header from "../components/Header.tsx";
import Layout from "../components/Layout.tsx";
import H1 from "../components/H1.tsx";
import PersonalityCard from "../islands/PersonalityCard.tsx";
import programs from "../static/programs.ts";
import personalities from "../static/personalities.ts";
import ProgramCards from "../islands/ProgramCards.tsx";
import NowPlaying from "../islands/NowPlaying.tsx";
import { useRef } from "preact/hooks";
import ContentMargin from "../components/ContentMagin.tsx";
import Contents from "./Contents.tsx";
import Gallery from "./Gallery.tsx";
import ChatTop from "./ChatTop.tsx";
import { Program } from "../types/Program.ts";
import Music from "./Music.tsx";

export default function Container() {
  const topRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const personalityRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const musicRef = useRef<HTMLDivElement>(null);

  const handleOnClick = (id?: string) => {
    let box = topRef;
    if (id === "Chat") box = chatRef;
    if (id === "Personalities") box = personalityRef;
    if (id === "Programs") box = programsRef;
    if (id === "Gallery") box = galleryRef;
    if (id === "Music") box = musicRef;
    box.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [day1content, day2content] = programs.reduce((acc, current) => {
    if (current.day === 1) return [[...acc[0], current], acc[1]];
    else return [acc[0], [...acc[1], current]];
  }, [[], []] as Program[][]);

  return (
    <div
      class={tw`text-[#45454D] overflow-scroll`}
      style={{
        "height": "100svh",
        "touch-action": "manipulation",
      }}
    >
      <Header handleOnClick={handleOnClick} />
      <div id="top" ref={topRef} />
      <Layout>
        <H1 text="Now Playing" />
        <NowPlaying />

        <ContentMargin />
        <H1 text="Contents" />
        <div class={tw`mt-4`} />
        <Contents handleOnClick={handleOnClick} />

        <div id="chat" ref={chatRef} />
        <ContentMargin />
        <H1 text="Chat" />
        <ChatTop />

        <div id="personality" ref={personalityRef} />
        <ContentMargin />
        <H1 text="Personalities" />
        <PersonalityCard personalities={personalities} />

        <div id="programs" ref={programsRef} />
        <ContentMargin />
        <H1 text="Programs" />
        <div class={tw`text-3xl font-black mt-4`}>Day1</div>
        <ProgramCards programs={day1content} />
        <div class={tw`text-3xl font-black mt-16`}>Day2</div>
        <ProgramCards programs={day2content} />

        <div id="music" ref={musicRef} />
        <ContentMargin />
        <H1 text="Music" />
        <div class={tw`mt-4`} />
        <Music />

        <div id="gallery" ref={galleryRef} />
        <ContentMargin />
        <H1 text="Gallery" />
        <div class={tw`mt-4`} />
        <Gallery />

        <div class={tw`mt-80`} />

        <a
          class={tw`mb-[-24px] w-full flex flex-col justify-center items-center`}
          href="http://web.wakayama-u.ac.jp/~yoshino/lab/"
          target="_blank"
        >
          <p class={`text-[#9FA6ED] font-bold opacity-[0.6]`}>見つかった！</p>
          <img
            src="/takashi.png"
            alt="takashi"
            class={tw`h-32 mt-4`}
          />
        </a>
      </Layout>
    </div>
  );
}
