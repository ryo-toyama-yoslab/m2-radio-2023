import { Program } from "../types/Program.ts";
import ProgramCardMemo from "../islands/ProgramCard.tsx";
import { useCallback, useEffect, useState } from "preact/hooks";
import React from "https://esm.sh/v92/preact@10.10.0/compat/src/index";

const getClaps = async () => {
  const claps = await fetch(
    "https://www3.yoslab.net/~nishimura/yoslab-radio/getClaps.php",
  );
  const clapsJson: Clap[] = await claps.json();
  return clapsJson;
};

type Clap = { id: number; count: number };

const ProgramCards = (props: { programs: Program[] }) => {
  const [claps, setClaps] = useState<Clap[]>([]);

  useEffect(() => {
    const inner = async () => {
      const claps = await getClaps();
      setClaps(claps);
    };
    inner();

    setInterval(async () => {
      const claps = await getClaps();
      setClaps(claps);
    }, 1000);
  }, []);

  const handleOnClick = useCallback(async (id: number) => {
    const postItem = { id: id };
    await fetch(
      "https://www3.yoslab.net/~nishimura/yoslab-radio/updateClap.php",
      {
        method: "POST",
        body: JSON.stringify(postItem),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    /*
    console.log(id);
    setClaps(
      claps.map((clap) =>
        clap.id == id
          ? { id: id, count: clap.count + 1 }
          : { id: id, count: clap.count }
      ),
    );
    */
  }, []);

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
            handleOnClick={handleOnClick}
          />
        );
      })}
    </div>
  );
};

export default ProgramCards;
