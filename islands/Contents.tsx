/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const contents = [
  {
    name: "Chat",
    iconPath: "speech_balloon_3d",
  },
  {
    name: "Personalities",
    iconPath: "man_raising_hand_3d_default",
  },
  {
    name: "Programs",
    iconPath: "studio_microphone_3d",
  },
  {
    name: "Gallery",
    iconPath: "camera_with_flash_3d",
  },
];

type Props = {
  handleOnClick: (id: string) => void;
};

export default function Contents(props: Props) {
  return (
    <ul
      class={tw`text-[#9FA6ED] text-xl font-bold mt-4`}
    >
      {contents.map((content, index) => {
        return (
          <li
            class={tw`mt-2 flex flex-row justify-start items-center
            border-2 border-[#9FA6ED] rounded-[10px] px-4 py-2
            transition-all active:opacity-50`}
            onClick={() => props.handleOnClick(content.name)}
            key={index}
          >
            <img
              src={`/${content.iconPath}.png`}
              alt={content.iconPath}
              class={tw`h-8`}
              loading="lazy"
              onTouchStart={(e) => ""}
            />
            <div class={tw`ml-4`}>{content.name}</div>
          </li>
        );
      })}
    </ul>
  );
}
