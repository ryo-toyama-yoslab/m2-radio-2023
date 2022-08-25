/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";
import Chat from "../types/Chat.ts";
import ChatMemo from "./Chat.tsx";

const getChats = async (id: number): Promise<Chat[]> => {
  const chats = await fetch(
    "https://www3.yoslab.net/~nishimura/yoslab-radio/getChats.php",
    {
      method: "POST",
      body: JSON.stringify({
        "id": id,
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

const ChatList = () => {
  const [chatList, setChatList] = useState<Chat[]>([]);
  const [timer, setTimer] = useState<number>();

  const innerSec = async () => {
    const id = chatList.length > 0 ? chatList.slice(-1)[0].id : 0;
    const newChats = (await getChats(id));
    console.log(newChats);
    return newChats;
  };

  useEffect(() => {
    clearInterval(timer);
    const innerTimer = setInterval(async () => {
      const newChatLists = await innerSec();
      setChatList((prev) => [...prev, ...newChatLists]);
    }, 3000);
    setTimer(innerTimer);
  }, [chatList]);

  return (
    <div
      class={tw`flex flex-col justify-items-stretch items-stretch mb-24`}
    >
      {chatList.map((chat) => <ChatMemo chat={chat} />)}
    </div>
  );
};

export default ChatList;
