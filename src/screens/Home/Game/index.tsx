import { useRef, useState, useEffect } from "react";
import { Start } from "./Start";
import { GameEngine } from "react-native-game-engine";
import entities from "../../../entities";
import { styles } from "./styles";
import { Physics } from "../../../utils/physics";

const Game = () => {
  const [running, setIsRunning] = useState(false);
  const gameEngine = useRef(null);

  useEffect(() => {
    setIsRunning(true);
  }, []);

  const handleOnStartGame = () => {};

  // return <Start handleOnStartGame={handleOnStartGame} />;

  return (
    <GameEngine
      systems={[Physics]}
      ref={gameEngine}
      running={running}
      entities={entities()}
      style={styles.engineContainer}
    />
  );
};

export { Game };
