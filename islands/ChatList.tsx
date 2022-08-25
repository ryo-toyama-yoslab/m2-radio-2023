/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";

const getChats = (): Chat[] => {
  /*
  const claps = await fetch(
    "https://www3.yoslab.net/~nishimura/yoslab-radio/getClaps.php",
  );
  const clapsJson: Clap[] = await claps.json(); // 降ってくるJSONが全部stringになってる...
  const clapsWithType = clapsJson.map((clap) => {
    return { id: Number(clap.id), count: Number(clap.count) };
  });
  return clapsWithType;
  */
  return [
    { iconName: "t-rex_3d", date: "2020-01-01", text: "wwww" },
    {
      iconName: "t-rex_3d",
      date: "2020-01-02",
      text: "hey",
    },
    {
      iconName: "t-rex_3d",
      date: "2020-01-01",
      text:
        "マシンガントークでおなじみのMr.林が，今一番熱いコンテンツについて語る！第一弾となる「ジョジョ編」では，あなたをジョジョの世界に引き込みます．",
    },
    { iconName: "t-rex_3d", date: "2020-01-01", text: "wwww" },
    { iconName: "t-rex_3d", date: "2020-01-01", text: "wwww" },
    { iconName: "t-rex_3d", date: "2020-01-01", text: "wwww" },
    { iconName: "t-rex_3d", date: "2020-01-01", text: "wwww" },
    { iconName: "t-rex_3d", date: "2020-01-01", text: "wwww" },
    { iconName: "t-rex_3d", date: "2020-01-01", text: "wwww" },
    { iconName: "t-rex_3d", date: "2020-01-01", text: "wwww" },
    { iconName: "t-rex_3d", date: "2020-01-01", text: "wwww" },
    { iconName: "t-rex_3d", date: "2020-01-01", text: "wwww" },
    { iconName: "t-rex_3d", date: "2020-01-01", text: "wwww" },
    { iconName: "t-rex_3d", date: "2020-01-01", text: "wwww" },
    { iconName: "t-rex_3d", date: "2020-01-01", text: "wwww" },
    { iconName: "t-rex_3d", date: "2020-01-01", text: "wwww" },
    { iconName: "t-rex_3d", date: "2020-01-01", text: "wwww" },
    { iconName: "t-rex_3d", date: "2020-01-01", text: "wwww" },
    { iconName: "t-rex_3d", date: "2020-01-01", text: "wwww" },
    { iconName: "t-rex_3d", date: "2020-01-01", text: "wwww" },
    { iconName: "t-rex_3d", date: "2020-01-01", text: "wwww" },
    { iconName: "t-rex_3d", date: "2020-01-01", text: "wwww" },
  ];
};

type Chat = { iconName: string; date?: string; text: string };

const ChatList = () => {
  const [chatList, setChatList] = useState<Chat[]>([]);

  useEffect(() => {
    const inner = async () => {
      const newChats = await getChats();
      setChatList(newChats);
    };
    inner();

    setInterval(async () => {
      const newChats = await getChats();
      console.log(newChats);
      setChatList(newChats);
    }, 2000);
  }, []);

  return (
    <div
      class={tw`flex flex-col justify-items-stretch items-stretch mb-20`}
    >
      {chatList.map((chat) => {
        {
          return (
            <div
              class={tw`flex flex-row justify-start items-start mt-4 w-full`}
            >
              <img
                src={`/${chat.iconName}.png`}
                alt={`/${chat.iconName}`}
                class={tw`block w-10 h-10`}
                loading="lazy"
              />
              <div
                class={tw`w-full pl-4`}
              >
                <div
                  class={tw`bg-[#E9E9EA] rounded-[10px] p-4 font-bold`}
                >
                  <p>{chat.text}</p>
                  <p
                    class={tw`flex justify-end text-xs font-light text-[#9B9B9F] mt-1`}
                  >
                    {chat.date}
                  </p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ChatList;
