import programs from "./programs.ts";
import { Personality } from "../types/Personality.ts";

const personalities: Personality[] = [
  {
    firstName: "航大",
    LastName: "酒井",
    overview: "スーパーナチュラル",
    join: [programs[0].title, programs[1].title, programs[1].title],
    imageName: "sakai",
  },
  {
    firstName: "希和",
    LastName: "田中",
    overview: "なにわのアイコ",
    join: [
      programs[1].title,
    ],
    imageName: "tanaka",
  },
  {
    firstName: "舜也",
    LastName: "鈴木",
    overview: "a.k.a すーさん",
    join: [],
    imageName: "suzuki",
  },
  {
    firstName: "綾乃",
    LastName: "中村",
    overview: "奈良の秘宝",
    join: [],
    imageName: "nakamura",
  },
  {
    firstName: "涼太",
    LastName: "西村",
    overview: "吉野研の妖精",
    join: [],
    imageName: "nishimura",
  },
  {
    firstName: "央也",
    LastName: "林",
    overview: "舌鋒鋭い",
    join: [],
    imageName: "hayashi",
  },
];

export default personalities;
