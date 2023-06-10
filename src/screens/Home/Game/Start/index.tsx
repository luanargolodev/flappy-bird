import { View, Text, Image, TouchableWithoutFeedback } from "react-native";

import LOGO from "../../../../assets/logo.png";
import PLAY from "../../../../assets/play.png";
import { styles } from "./styles";

const Start = ({ handleOnStartGame }) => {
  return (
    <View style={styles.container}>
      <Image source={LOGO} style={styles.logo} />

      <TouchableWithoutFeedback onPress={handleOnStartGame}>
        <Image source={PLAY} style={styles.playButton} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export { Start };
