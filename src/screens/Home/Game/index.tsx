import { useRef, useState, useEffect } from "react";
import { Start } from "./Start";
import { GameEngine } from "react-native-game-engine";
import entities from "../../../entities";
import { styles } from "./styles";

const Game = () => {
  const [running, setIsRunning] = useState(false);
  const gameEngine = useRef(null);

  const handleOnStartGame = () => {};

  // return <Start handleOnStartGame={handleOnStartGame} />;

  return (
    <GameEngine
      ref={gameEngine}
      entities={entities()}
      style={styles.engineContainer}
    />
  );
};

export { Game };
