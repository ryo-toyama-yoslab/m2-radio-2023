/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";
import Chat from "../types/Chat.ts";
import ChatMemo from "./Chat.tsx";

const getChats = async (id: number): Promise<Chat[]> => {
  const chats = await fetch(
    /*
      * [todo] ここはチャットの内容を取得するAPIを作成して差し替える
      * [tweet] エラーハンドリングとか何もしてないの雑すぎるので直してもいいと思う
      * [tweet] なんでPOSTでリクエストしてるのか全くの謎なので、GETでいいと思う
    */
    "https://www3.yoslab.net/~toyama/yoslab-radio/getChats.php",
    {
      method: "GET",
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

  const inner = async () => {
    const newChats = (await getChats(0));
    setChatList(newChats);
  };

  const innerSec = async () => {
    const id = chatList.length > 0 ? chatList[0].id : 0;
    const newChats = (await getChats(id));
    return newChats;
  };

  useEffect(() => {
    if (chatList.length === 0) inner();

    clearInterval(timer);
    const innerTimer = setInterval(async () => {
      const newChatLists = await innerSec();
      setChatList((prev) => {
        // console.log(prev);
        return [...newChatLists, ...prev];
      });
    }, 1000);
    setTimer(innerTimer);
  }, [chatList]);

  return (
    <div
      class={tw`flex flex-col justify-items-stretch items-stretch mb-24`}
    >
      {chatList.map((chat) => (
        <div key={chat.id}>
          <ChatMemo chat={chat} />
        </div>
      ))}
    </div>
  );
};

export default ChatList;
