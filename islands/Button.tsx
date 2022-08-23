/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Button(
  props: h.JSX.HTMLAttributes<HTMLButtonElement>,
) {
  return <button {...props} />;
}
