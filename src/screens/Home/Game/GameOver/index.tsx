import { useEffect } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";

import GAME_OVER from "../../../../assets/game-over.png";
import { styles } from "./styles";

interface GameOverProps {
  handleBackToStart: () => void;
}

const GameOver = ({ handleBackToStart }: GameOverProps) => {
  useEffect(() => {
    setTimeout(() => {
      handleBackToStart();
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={GAME_OVER} style={styles.logo} />
    </View>
  );
};

export { GameOver };
