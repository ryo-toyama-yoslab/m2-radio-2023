/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Program } from "../types/Program.ts";
import programs from "../static/programs.ts";
import { tw } from "@twind";

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

const updatePlaying = async (id: number) => {
  await fetch(
    "https://www3.yoslab.net/~nishimura/yoslab-radio/updatePlaying.php",
    {
      method: "POST",
      body: JSON.stringify({ id: 1, playingId: id }),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};

const Switcher = () => {
  const [playing, setPlaying] = useState<Program>(programs[0]);

  const handleChange = (e: any) => {
    updatePlaying(Number(e.target.value) || 0);
    const newProgram = programs.find((v) => v.id === Number(e.target.value)) ||
      programs[0];
    setPlaying(newProgram);
  };

  useEffect(() => {
    const inner = async () => {
      const newPlaying = await getPlaying();
      setPlaying(newPlaying);
    };
    inner();
  }, []);

  return (
    <ul class={tw`flex flex-col justify-center`}>
      {programs.map((program) => {
        return (
          <label
            key={program.id}
            class={tw`flex flex-row justify-start items-center mt-2`}
          >
            <input
              type="radio"
              value={program.id}
              onChange={handleChange}
              checked={Number(playing.id) === Number(program.id)}
            />
            <div>
              {program.title}
            </div>
          </label>
        );
      })}
    </ul>
  );
};

export default Switcher;
