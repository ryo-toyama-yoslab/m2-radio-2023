/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Header from "../components/Header.tsx";
import Layout from "../components/Layout.tsx";
import Switcher from "../islands/Switcher.tsx";
import H1 from "../components/H1.tsx";

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
        <H1 text="Switcher"></H1>
        <Switcher />
      </Layout>
    </div>
  );
}
