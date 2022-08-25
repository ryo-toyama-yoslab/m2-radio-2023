/** @jsx h */
import { h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { tw } from "@twind";
import Chat from "../types/Chat.ts";

const getRandomArray = (array: string[]) => {
  const rand = Math.random() * array.length | 0;
  return array[rand];
};

const getRandomIconName = (nowIconName: string) => {
  const iconNames = [
    "t-rex_3d",
    "crab_3d",
    "frog_3d",
    "spouting_whale_3d",
  ];
  let newIconName = "";
  for (let i = 0;; i++) {
    newIconName = getRandomArray(iconNames);
    if (newIconName !== nowIconName) break;
  }
  return newIconName;
};

const ChatList = () => {
  const [iconName, setIconName] = useState<string>(getRandomIconName(""));
  const [formText, setFormText] = useState<string>("");

  const handleOnClickSend = async (props: Chat) => {
    const { text, iconName } = props;
    const clearText = text.trim();
    if (clearText === "") return;
    // dbにテキストを送信
    try {
      const response = await fetch(
        "https://www3.yoslab.net/~nishimura/yoslab-radio/insertChat.php",
        {
          method: "POST",
          body: JSON.stringify({
            "chatText": clearText,
            "iconName": iconName,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      console.log(await response.json());
    } catch (error) {
      console.error(error);
    }
    setFormText("");
  };

  const handleOnClickChangeIcon = () => {
    const newIconName = getRandomIconName(iconName);
    setIconName(newIconName);
  };

  const handleOnChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setFormText(target.value);
  };

  const useAutoResizeTextArea = (value: string | undefined) => {
    const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
      const element = ref.current;
      if (!element) return;

      const { borderTopWidth, borderBottomWidth, paddingTop, paddingBottom } =
        getComputedStyle(element);

      element.style.height = "auto";
      element.style.height =
        `calc(${element.scrollHeight}px + ${paddingTop} + ${paddingBottom} + ${borderTopWidth} + ${borderBottomWidth} - 24px)`;
    }, [value]);

    return ref;
  };

  const textAreaRef = useAutoResizeTextArea(formText);

  return (
    <div
      class={tw`w-full p-6 bg-[#9FA6ED]
        flex flex-row justify-between items-end font-black fixed bottom-0 z-50`}
    >
      <button
        onClick={handleOnClickChangeIcon}
        class={tw`flex flex-col justify-center items-center font-bold text-xs text-white`}
      >
        <img
          src={`/icon/${iconName}.png`}
          alt={`/${iconName}`}
          class={tw`block w-10 transition-all active:scale-[2] duration-100`}
          loading="lazy"
        />
        <div class={tw`w-14`}>Change!</div>
      </button>
      <div class={tw`w-full max-w-fit px-6 flex justify-center items-center`}>
        <textarea
          type="text"
          value={formText}
          onChange={handleOnChange}
          class={tw`px-4 py-2 w-full rounded-[10px] resize-none focus:border-[#9B9B9F] outline-none transition-all`}
          ref={textAreaRef}
        />
      </div>
      <button
        onClick={() =>
          handleOnClickSend({ text: formText, iconName: iconName })}
        class={tw`flex flex-col items-center font-bold text-xs text-white`}
      >
        <img
          src={`/send.png`}
          alt={`submit`}
          class={tw`w-10 transition-all active:scale-[1.5] duration-100`}
          loading="lazy"
        />
        <div class={tw`w-12`}>Send!</div>
      </button>
    </div>
  );
};

export default ChatList;
