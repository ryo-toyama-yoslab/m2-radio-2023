/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Program } from "../types/Program.ts";
import programs from "../static/programs.ts";
import ProgramCards from "./ProgramCards.tsx";

const getPlaying = async () => {
  const response = await fetch(
    "https://www3.yoslab.net/~nishimura/yoslab-radio/getPlaying.php",
  );
  const playingJson = await response.json();

  const nowPlaying: Program =
    programs.find((v) => v.id === Number(playingJson[0].playingId)) ||
    programs[0];
  return nowPlaying;
};

const NowPlaying = (props: {
  isCompact: boolean;
}) => {
  const [playing, setPlaying] = useState<Program>(programs[0]);

  useEffect(() => {
    const inner = async () => {
      const newPlaying = await getPlaying();
      setPlaying(newPlaying);
    };
    inner();

    setInterval(async () => {
      const newPlaying = await getPlaying();
      setPlaying(newPlaying);
    }, 10000);
  }, []);

  return (
    <div>
      {!props.isCompact
        ? <ProgramCards programs={[playing]} />
        : <div>compact!</div>}
    </div>
  );
};

NowPlaying.defaultProps = {
  isCompact: false,
};

export default NowPlaying;
