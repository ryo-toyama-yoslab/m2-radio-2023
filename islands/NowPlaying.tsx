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
  const playingJson: number = await response.json();
  const nowPlaying: Program =
    programs.find((v) => v.id === Number(playingJson)) || programs[0];
  return nowPlaying;
};

const NowPlaying = () => {
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
      <ProgramCards programs={[playing]} />
    </div>
  );
};

export default NowPlaying;
