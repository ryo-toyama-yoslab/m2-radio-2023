import { Program } from "../types/Program.ts";
import ProgramCardMemo from "../islands/ProgramCard.tsx";
import React, {
  useState,
} from "https://esm.sh/v92/preact@10.10.0/compat/src/index";
import Button from "./Button.tsx";

const ProgramCards = (props: { programs: Program[] }) => {
  const [claps, setClaps] = useState<number[]>([0, 1, 2, 3]);

  const handleOnClick = () => {
    const newClaps = claps.map((clap, index) =>
      index % 2 === 0 ? clap + 1 : clap
    );
    // console.log(newClaps);
    setClaps(newClaps);
  };

  return (
    <div>
      <Button onClick={handleOnClick}>クラップ</Button>
      {props.programs.map((program, index) => (
        <ProgramCardMemo
          id={program.id}
          iconName={program.iconName}
          title={program.title}
          personalityLastNames={program.personalityLastNames}
          overview={program.overview}
          playtime={program.playtime}
          isTransition={true}
          clap={claps[index]}
        />
      ))}
    </div>
  );
};

export default ProgramCards;
