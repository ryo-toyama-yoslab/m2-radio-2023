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
      <Header />
      <div id="top" />
      <Layout>
        <H1 text="Now Playing" />
        <ProgramCards programs={[programs[0]]} />

        <div class={tw`mt-8`} />
        <H1 text="Personalities" />
        <PersonalityCard personalities={personalities} />

        <div class={tw`mt-8`} />
        <H1 text="Contents" />
        <ProgramCards programs={programs} />
      </Layout>
    </div>
  );
}
