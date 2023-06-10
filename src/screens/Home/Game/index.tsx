import { useRef, useState, useEffect } from "react";
import { Start } from "./Start";
import { GameOver } from "./GameOver";
import { GameEngine } from "react-native-game-engine";
import entities from "../../../entities";
import { styles } from "./styles";
import { Physics } from "../../../utils/physics";

const Game = () => {
  const [running, setIsRunning] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const gameEngine = useRef(null);

  useEffect(() => {
    setIsRunning(true);
  }, []);

  const handleBackToStart = () => {
    setIsRunning(false);
    setIsGameOver(false);
  };

  const handleOnStartGame = () => {
    setIsRunning(true);
    setIsGameOver(false);
  };

  const handleOnGameOver = () => {
    setIsRunning(false);
    setIsGameOver(true);
  };

  const handleOnEvent = (event: { type: string }) => {
    switch (event.type) {
      case "game_over":
        handleOnGameOver();
        break;
    }
  };

  if (!running && !isGameOver) {
    return <Start handleOnStartGame={handleOnStartGame} />;
  }

  if (!running && isGameOver) {
    return <GameOver handleBackToStart={handleOnStartGame} />;
  }

  return (
    <GameEngine
      systems={[Physics]}
      ref={gameEngine}
      running={running}
      entities={entities()}
      onEvent={handleOnEvent}
      style={styles.engineContainer}
    />
  );
};

export { Game };
