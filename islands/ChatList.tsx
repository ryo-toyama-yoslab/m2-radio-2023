/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";
import Chat from "../types/Chat.ts";

const getChats = async (): Promise<Chat[]> => {
  const claps = await fetch(
    "https://www3.yoslab.net/~nishimura/yoslab-radio/getChats.php",
  );
  const chatsJson = await claps.json();
  const chatsWithType = chatsJson.map((chat: {
    id: string;
    chat_text: string;
    created_at: Date;
    icon_name: string;
  }) => {
    return {
      id: Number(chat.id),
      text: chat.chat_text,
      date: chat.created_at,
      iconName: chat.icon_name,
    };
  });
  return chatsWithType;
};

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
      setChatList(newChats);
    }, 2000);
  }, []);

  return (
    <div
      class={tw`flex flex-col justify-items-stretch items-stretch mb-24`}
    >
      {chatList.map((chat) => {
        {
          return (
            <div
              class={tw`flex flex-row justify-start items-start mt-4 w-full`}
            >
              <img
                src={`/icon/${chat.iconName}.png`}
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
                    class={tw`flex justify-end text-xs font-light text-[#9B9B9F] mt-2`}
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
