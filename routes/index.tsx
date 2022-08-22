/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Header from "../components/Header.tsx";
import Layout from "../components/Layout.tsx";
import H1 from "../components/H1.tsx";
import ProgramCard from "../components/ProgramCard.tsx";

export default function Home() {
  return (
    <div class={tw`text-[#45454D]`}>
      <Header />
      <Layout>
        <H1 text="Now Playing" />
        <ProgramCard
          iconName="t-rex"
          title="Mr.林のマシンガントーク ~ジョジョ編~"
          personalityLastNames={["林", "酒井"]}
          overview="林は、ジョジョが持つ「マシンガン」を使って、自分の身体を覚醒させる。"
          playtime={60}
        />
        <div class={tw`mt-8`} />
        <H1 text="Personalities" />
        <div class={tw`mt-8`} />
        <H1 text="Contents" />
      </Layout>
    </div>
  );
}
