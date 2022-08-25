/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { memo } from "preact/compat";
import Chat from "../types/Chat.ts";

const Chat = (props: {
  chat: Chat;
}) => {
  console.log("render");
  const { chat } = props;
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
};

const ChatMemo = memo(Chat);

export default ChatMemo;
