import { Program } from "../types/Program.ts";
import ProgramCardMemo from "../islands/ProgramCard.tsx";
import React, {
  useEffect,
  useState,
} from "https://esm.sh/v92/preact@10.10.0/compat/src/index";
import Button from "./Button.tsx";

type Clap = { id: number; count: number };

const ProgramCards = (props: { programs: Program[] }) => {
  const [claps, setClaps] = useState<Clap[]>([]);

  useEffect(() => {
    const inner = async () => {
      const claps = await fetch(
        "https://www3.yoslab.net/~nishimura/yoslab-radio/getClaps.php",
      );
      const clapsJson: Clap[] = await claps.json();
      setClaps(clapsJson);
    };
    inner();
  }, []);

  const handleOnClick = () => {
  };

  return (
    <div>
      {props.programs.map((program) => {
        const clapsCount = claps.find((v) => v.id == program.id)?.count || 0;
        return (
          <ProgramCardMemo
            id={program.id}
            iconName={program.iconName}
            title={program.title}
            personalityLastNames={program.personalityLastNames}
            overview={program.overview}
            playtime={program.playtime}
            isTransition={true}
            clap={clapsCount}
          />
        );
      })}
    </div>
  );
};

export default ProgramCards;
