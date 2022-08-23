import { Program } from "../types/Program.ts";

const programs: Program[] = [
  {
    id: 1,
    iconName: "radio",
    title: "オープニング",
    personalityLastNames: ["酒井", "鈴木", "田中", "中村", "西村", "林"],
    overview: "まずはここから！",
    playtime: 10,
  },
  {
    id: 2,
    iconName: "t-rex",
    title: "Mr.林のマシンガントーク ~ジョジョ編~",
    personalityLastNames: ["林", "酒井"],
    overview:
      "マシンガントークでおなじみのMr.林が，今一番熱いコンテンツについて語る！第1弾となる「ジョジョ編」では，あなたをジョジョの世界に引き込みます．",
    playtime: 60,
  },

  {
    id: 3,
    iconName: "radio",
    title: "Mr.林のマシンガントーク ~マーベル編~",
    personalityLastNames: ["鈴木", "林", "田中"],
    overview: "マシンガントークでおなじみのMr.林が，今一番熱いコンテンツについて語る！ジョジョ編ですでにお腹いっぱいの方も必聴！",
    playtime: 21,
  },
  {
    id: 4,
    iconName: "index_pointing_at_the_viewer",
    title: "このマイブームはあなたのだ！",
    personalityLastNames: ["鈴木", "林", "田中"],
    overview: "あなたのユニークなマイブームを教えて下さい．後輩を誰よりも理解しているM2ならあなたが誰か当てられる(はず)．",
    playtime: 21,
  },
  {
    id: 5,
    iconName: "radio",
    title: "エンディング",
    personalityLastNames: ["酒井", "鈴木", "田中", "中村", "西村", "林"],
    overview: "終わりよければ全て良し！",
    playtime: 10,
  },
];

export default programs;
