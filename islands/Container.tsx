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

export default function Container() {
  const topRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const personalityRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleOnClick = (id?: string) => {
    let box = topRef;
    if (id === "Chat") box = chatRef;
    if (id === "Personalities") box = personalityRef;
    if (id === "Programs") box = programsRef;
    if (id === "Gallery") box = galleryRef;
    box.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
        <ProgramCards programs={programs} />

        <div id="gallery" ref={galleryRef} />
        <ContentMargin />
        <H1 text="Gallery" />
        <div class={tw`mt-4`} />
        <Gallery />
      </Layout>
    </div>
  );
}
