import React from "react";
import { Image } from "react-native";
import Matter from "matter-js";

import BIRD from "../../assets/bird.png";
import { styles } from "./styles";

interface FloorProps {
  body: Matter.Body;
  color: string;
}

const Floor: React.FC<FloorProps> = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;
  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  const color = props.color;

  return (
    <Image
      source={BIRD}
      style={
        styles({
          widthBody,
          heightBody,
          xBody,
          yBody,
          color,
        }).floor
      }
    />
  );
};

export default (
  world: Matter.World,
  color: string,
  pos: Matter.Vector,
  size: { width: number; height: number }
) => {
  const initialFloor = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: "Floor", isStatic: true }
  );

  Matter.World.add(world, [initialFloor]);

  return {
    body: initialFloor,
    color,
    pos,
    renderer: <Floor body={initialFloor} color={color} />,
  };
};
