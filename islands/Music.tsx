/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

type Music = {
  title: string;
  artist: string;
};

/*
  * [todo] ここは当日再生する曲のリストに差し替える
*/
const musics: Music[] = [
  {
    title: "The Power Of Love",
    artist: "Huey Lewis & The News",
  },
  {
    title: "Up All Night",
    artist: "One Direction",
  },
  {
    title: "Everything about you",
    artist: "One Direction",
  },
  {
    title: "熱情のスペクトラム",
    artist: "いきものがかり",
  },
  {
    title: "B.B.",
    artist: "the野党",
  },
  {
    title: "イカロス",
    artist: "Greeeen",
  },
  {
    title: "初心LOVE",
    artist: "なにわ男子",
  },
  {
    title: "気まぐれロマンティック",
    artist: "いきものがかり",
  },
  {
    title: "ゴールデンタイムラバー",
    artist: "スキマスイッチ",
  },
  {
    title: "ブラザービート",
    artist: "SnowMan",
  },
  {
    title: "アイデア",
    artist: "星野源",
  },
  {
    title: "扉",
    artist: "Greeeen",
  },
  {
    title: "メランコリーキッチン",
    artist: "米津玄師",
  },
  {
    title: "サイレントマジョリティー",
    artist: "欅坂46",
  },
  {
    title: "Hey Jude",
    artist: "The Beatles",
  },
  {
    title: "Let It Be",
    artist: "The Beatles",
  },
  {
    title: "Feel So Moon",
    artist: "ユニコーン",
  },
  {
    title: "rumors",
    artist: "Jake Miller",
  },
  {
    title: "W-KEYAKIZAKAの詩",
    artist: "欅坂46",
  },
  {
    title: "ユリーカ",
    artist: "スキマスイッチ",
  },
  {
    title: "アイデンティティ",
    artist: "サカナクション",
  },
  {
    title: "ブルーバード",
    artist: "いきものがかり",
  },
  {
    title: "不協和音",
    artist: "欅坂46",
  },
  {
    title: "絶体絶命",
    artist: "東京事変",
  },
  {
    title: "花火",
    artist: "aiko",
  },
  {
    title: "白日",
    artist: "King Gnu",
  },
  {
    title: "Happily",
    artist: "One Direction",
  },
  {
    title: "Kiss You",
    artist: "One Direction",
  },
  {
    title: "HANABI",
    artist: "Mr.Children",
  },
  {
    title: "さらば",
    artist: "キンモクセイ",
  },
];

export default function Music() {
  return (
    <div>
      {musics.map((music, index) => {
        return (
          <div class={tw`flex flex-col relative mb-6`}>
            <div class={tw`text-[#9FA6ED] text-xl font-bold`}>
              {music.title}
            </div>
            <div class={tw`text-[#9FA6ED] text-sm`}>
              {music.artist}
            </div>
            <div
              class={tw`absolute top-0 right-0 text-[#9FA6ED] text-3xl opacity-[0.3]`}
            >
              {index + 1}
            </div>
          </div>
        );
      })}
      <p
        class={tw`w-full text-right text-[#9FA6ED] font-bold mt-8 opacity-[0.6]`}
      >
        ... and more ?
      </p>
    </div>
  );
}
