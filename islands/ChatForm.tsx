/** @jsx h */
import { h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
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

  const handleOnClickSend = async (text: string) => {
    // dbにテキストを送信
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
      console.log(element.style.height);
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
        class={tw`flex flex-col items-center font-bold text-xs text-white`}
      >
        <img
          src={`/icon/${iconName}.png`}
          alt={`/${iconName}`}
          class={tw`block w-10 h-10 transition-all active:scale-[2] duration-100`}
          loading="lazy"
        />
        <div>Change!</div>
      </button>
      <textarea
        type="text"
        value={formText}
        onChange={handleOnChange}
        class={tw`p-2 rounded-[10px] resize-none focus:border-[#9B9B9F] outline-none transition-all`}
        ref={textAreaRef}
      />
      <button
        onClick={() => handleOnClickSend(formText)}
        class={tw`flex flex-col items-center font-bold text-xs text-white`}
      >
        <img
          src={`/icon/t-rex_3d.png`}
          alt={`submit`}
          class={tw`block w-10 h-10 transition-all active:scale-[1.5] duration-100`}
          loading="lazy"
        />
        <div>Send</div>
      </button>
    </div>
  );
};

export default ChatList;
