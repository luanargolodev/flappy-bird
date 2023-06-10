import Matter from "matter-js";
import { Dimensions } from "react-native";
import Bird from "../components/Bird";
import Floor from "../components/Floor";
import { getPipeSizePosPair } from "../utils/random";
import Obstacle from "../components/Obstacle";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const BOTTOM = 51;

export default () => {
  let engine = Matter.Engine.create({
    enableSleeping: false,
  });
  let world = engine.world;

  engine.gravity.y = 0.4;

  const pipeSizePosA = getPipeSizePosPair();
  const pipeSizePosB = getPipeSizePosPair(windowWidth * 0.9);

  return {
    Bird: Bird(world, "green", { x: 120, y: 300 }, { width: 40, height: 40 }),
    physics: { engine, world },
    Floor: Floor(
      world,
      "#e1d694",
      { x: windowWidth / 2, y: windowHeight - 17 },
      { width: windowWidth, height: BOTTOM + 20 }
    ),
    ObstacleTopOne: Obstacle(
      world,
      "ObstacleTopOne",
      "green",
      pipeSizePosA.pipeTop.pos,
      pipeSizePosA.pipeTop.size,
      true
    ),
    ObstacleBottomOne: Obstacle(
      world,
      "ObstacleBottomOne",
      "green",
      pipeSizePosA.pipeBottom.pos,
      pipeSizePosA.pipeBottom.size,
      true
    ),
  };
};
