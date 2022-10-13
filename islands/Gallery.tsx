/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Gallery() {
  const arr = Array(10).fill(0);
  return (
    <div>
      {arr.map((_, i) => {
        return (
          <img
            src={`/gallery/g${i + 1}.jpg`}
            alt={`The recording`}
            class={tw`block rounded-[10px] w-full mt-4`}
            loading="lazy"
          />
        );
      })}
    </div>
  );
}
