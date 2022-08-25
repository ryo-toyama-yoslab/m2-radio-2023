/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

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

  const handleOnClickSend = async () => {
    // dbにテキストを送信
  };

  const handleOnClickChangeIcon = () => {
    // アイコンを変更
    const newIconName = getRandomIconName(iconName);
    setIconName(newIconName);
  };

  const handleOnChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setFormText(target.value);
  };

  return (
    <div
      class={tw`w-full p-6 bg-[#9FA6ED] text-white
        flex flex-row items-center font-black fixed bottom-0 z-50`}
    >
      <button
        onClick={handleOnClickChangeIcon}
        class={tw`flex flex-col items-center font-bold text-xs`}
      >
        <img
          src={`/icon/${iconName}.png`}
          alt={`/${iconName}`}
          class={tw`block w-10 h-10`}
          loading="lazy"
        />
        <div>Change!</div>
      </button>
    </div>
  );
};

export default ChatList;
