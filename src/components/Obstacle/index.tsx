import React from "react";
import { Image } from "react-native";
import Matter from "matter-js";

import PIPE_GREEN from "../../assets/pipe-green.png";
import PIPE_ORANGE from "../../assets/pipe-orange.png";
import PIPE_GREEN_INVERTED from "../../assets/pipe-green-inverted.png";
import PIPE_ORANGE_INVERTED from "../../assets/pipe-orange-inverted.png";

import { styles } from "./styles";

interface ObstacleProps {
  body: Matter.Body;
  color: string;
  pos: Matter.Vector;
  isTop: boolean;
}

const Obstacle: React.FC<ObstacleProps> = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;
  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  const color = props.color;

  return (
    <Image
      source={
        color === "green"
          ? !props.isTop
            ? PIPE_GREEN
            : PIPE_GREEN_INVERTED
          : !props.isTop
          ? PIPE_ORANGE
          : PIPE_ORANGE_INVERTED
      }
      style={
        styles({
          widthBody,
          heightBody,
          xBody,
          yBody,
          color,
        }).obstacle
      }
    />
  );
};

export default (
  world: Matter.World,
  label: string,
  color: string,
  pos: Matter.Vector,
  size: { width: number; height: number },
  isTop: boolean
) => {
  const initialObstacle = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label, isStatic: true }
  );

  Matter.World.add(world, [initialObstacle]);

  return {
    body: initialObstacle,
    color,
    pos,
    isTop,
    renderer: (
      <Obstacle body={initialObstacle} color={color} pos={pos} isTop={isTop} />
    ),
  };
};
