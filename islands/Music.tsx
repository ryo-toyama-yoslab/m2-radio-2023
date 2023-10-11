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
    title: "飛行艇",
    artist: "King Gnu",
  },
  {
    title: "光るなら",
    artist: "グースハウス",
  },
  {
    title: "初心LOVE",
    artist: "なにわ男子",
  },
  {
    title: "Teenager Forever",
    artist: "King Gnu",
  },
  {
    title: "雫",
    artist: "スキマスイッチ",
  },
  {
    title: "やさしさに包まれたなら",
    artist: "荒井由実",
  },
  {
    title: "透明人間",
    artist: "東京事変",
  },
  {
    title: "Prayer X",
    artist: "King Gnu",
  },
  {
    title: "PLAY THE GAME",
    artist: "ロードオブメジャー",
  },
  {
    title: "波乗りジョニー",
    artist: "桑田佳祐",
  },
  {
    title: "ゴールデンタイムラバー",
    artist: "スキマスイッチ",
  },
  {
    title: "高嶺の花子さん",
    artist: "back number",
  },
  {
    title: "惑星ループ",
    artist: "Eve feat.ナユタン星人",
  },
  {
    title: "ラブレター",
    artist: "FUNKY MONKY BABYS",
  },
  {
    title: "歩いていこう",
    artist: "いきものがかり",
  },
  {
    title: "Timeless Love",
    artist: "なにわ男子",
  },
  {
    title: "気まぐれロマンチック",
    artist: "いきものがかり",
  },
  {
    title: "Ah Yeah!!",
    artist: "スキマスイッチ",
  },
  {
    title: "群青讃歌",
    artist: "Eve",
  },
  {
    title: "傘",
    artist: "King Gnu",
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
