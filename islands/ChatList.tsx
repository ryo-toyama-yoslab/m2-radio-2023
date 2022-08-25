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
      class={tw`flex flex-col justify-items-stretch items-stretch bg-black mb-20`}
    >
      {chatList.map((chat) => {
        {
          return <div>{JSON.stringify(chat)}</div>;
        }
      })}
    </div>
  );
};

export default ChatList;
