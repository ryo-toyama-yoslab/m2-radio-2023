/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Header from "../components/Header.tsx";
import Layout from "../components/Layout.tsx";
import H1 from "../components/H1.tsx";

export default function Home() {
  return (
    <div class={tw`text-[#45454D]`}>
      <Header />
      <Layout>
        <H1 text="Now Playing" />
        <div class={tw`mt-8`} />
        <H1 text="Personalities" />
        <div class={tw`mt-8`} />
        <H1 text="Contents" />
      </Layout>
    </div>
  );
}
