/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const contents = [
  "Personalities",
  "Programs",
  "Gallery",
];

type Props = {
  handleOnClick: (id: string) => void;
};

export default function Contents(props: Props) {
  return (
    <ul class={tw`text-[#9FA6ED] underline text-xl mt-4`}>
      {contents.map((content, index) => {
        return (
          <li
            class={tw`mt-1`}
            onClick={() => props.handleOnClick(content)}
            key={index}
          >
            &gt; {content}
          </li>
        );
      })}
    </ul>
  );
}
