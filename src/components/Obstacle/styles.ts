import { StyleSheet } from "react-native";

interface Props {
  xBody: number;
  yBody: number;
  widthBody: number;
  heightBody: number;
  color: string;
}

export const styles = ({ xBody, yBody, widthBody, heightBody, color }: Props) =>
  StyleSheet.create({
    obstacle: {
      position: "absolute",
      left: xBody,
      top: yBody,
      width: widthBody,
      height: heightBody,
      resizeMode: "cover",
    },
  });
