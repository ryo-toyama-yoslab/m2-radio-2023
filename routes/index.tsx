/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Header from "../components/Header.tsx";
import Layout from "../components/Layout.tsx";

export default function Home() {
  return (
    <div class={tw`text-[#45454D]`}>
      <Header />
      <Layout>
        <p>hello</p>
      </Layout>
    </div>
  );
}
