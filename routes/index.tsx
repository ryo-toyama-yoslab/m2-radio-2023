/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Header from "../components/Header.tsx";
import Layout from "../components/Layout.tsx";
import H1 from "../components/H1.tsx";
import ProgramCard from "../islands/ProgramCard.tsx";
import PersonalityCard from "../islands/PersonalityCard.tsx";
import programs from "../static/programs.ts";
import personalities from "../static/personalities.ts";

export default function Home() {
  const nowPlaying = 0;

  return (
    <div
      class={tw`text-[#45454D] overflow-scroll`}
      style={{ "overflow-scrolling": "touch", "height": "100svh" }}
    >
      <Header />
      <Layout>
        <H1 text="Now Playing" />
        <ProgramCard
          iconName={programs[nowPlaying].iconName}
          title={programs[nowPlaying].title}
          personalityLastNames={programs[nowPlaying].personalityLastNames}
          overview={programs[nowPlaying].overview}
          playtime={programs[nowPlaying].playtime}
          isTransition={false}
        />

        <div class={tw`mt-8`} />
        <H1 text="Personalities" />
        <PersonalityCard personalities={personalities} />

        <div class={tw`mt-8`} />
        <H1 text="Contents" />
        <div>
          {programs.map((program) => (
            <ProgramCard
              iconName={program.iconName}
              title={program.title}
              personalityLastNames={program.personalityLastNames}
              overview={program.overview}
              playtime={program.playtime}
              isTransition={true}
            />
          ))}
        </div>
      </Layout>
    </div>
  );
}
