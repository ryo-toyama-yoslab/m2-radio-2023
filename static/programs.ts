type Props = {
  iconName: string;
  title: string;
  personalityLastNames: string[];
  overview: string;
  playtime: number;
};

const programs: Props[] = [
  {
    "iconName": "t-rex",
    "title": "Mr.林のマシンガントーク ~ジョジョ編~",
    "personalityLastNames": ["林", "酒井"],
    overview:
      "マシンガントークでおなじみのMr.林が，今一番熱いコンテンツについて語る！第一弾となる「ジョジョ編」では，あなたをジョジョの世界に引き込みます．",
    "playtime": 60,
  },
  {
    "iconName": "radio",
    "title": "このマイブームはあなたのだ！",
    "personalityLastNames": ["鈴木", "林", "田中"],
    overview: "あなたのユニークなマイブームを教えて下さい．後輩を誰よりも理解しているM2ならあなたが誰か当てられる(はず)．",
    "playtime": 21,
  },
  {
    "iconName": "radio",
    "title": "このマイブームはあなたのだ！",
    "personalityLastNames": ["鈴木", "林", "田中"],
    overview: "あなたのユニークなマイブームを教えて下さい．後輩を誰よりも理解しているM2ならあなたが誰か当てられる(はず)．",
    "playtime": 21,
  },
  {
    "iconName": "radio",
    "title": "このマイブームはあなたのだ！",
    "personalityLastNames": ["鈴木", "林", "田中"],
    overview: "あなたのユニークなマイブームを教えて下さい．後輩を誰よりも理解しているM2ならあなたが誰か当てられる(はず)．",
    "playtime": 21,
  },
];

export default programs;
