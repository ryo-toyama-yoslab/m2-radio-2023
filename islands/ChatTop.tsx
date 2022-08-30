/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";
import Chat from "../types/Chat.ts";
import ChatMemo from "./Chat.tsx";

const getChats = async (limit: number): Promise<Chat[]> => {
  const chats = await fetch(
    "https://www3.yoslab.net/~nishimura/yoslab-radio/getChatTop.php",
    {
      method: "POST",
      body: JSON.stringify({
        "limit": limit,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const chatsJson = await chats.json();
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

const ChatTop = () => {
  const [chatList, setChatList] = useState<Chat[]>([]);

  const inner = async () => {
    const newChats = (await getChats(3));
    setChatList(newChats);
  };

  useEffect(() => {
    if (chatList.length === 0) inner();
  }, []);

  return (
    <div
      class={tw`flex flex-col justify-items-stretch items-stretch`}
    >
      {chatList.map((chat) => (
        <div key={chat.id}>
          <ChatMemo chat={chat} />
        </div>
      ))}
      <div class={tw`mt-4`} />
      {Array(2).fill(0).map((_, i) => {
        return (
          <div
            class={tw`flex flex-col justify-center items-center font-black text-[#9FA6ED]`}
          >
            ・
          </div>
        );
      })}
      <a
        class={tw`flex flex-row justify-center items-center mt-4
            font-bold text-xl  transition-all active:opacity-50
            p-4 rounded-full bg-[#9FA6ED] text-white
            `}
        href="/chat"
      >
        Join Chat !
      </a>
    </div>
  );
};

export default ChatTop;
