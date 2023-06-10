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
    ObstacleTop1: Obstacle(
      world,
      "ObstacleTop1",
      "green",
      pipeSizePosA.pipeTop.pos,
      pipeSizePosA.pipeTop.size,
      true
    ),
    ObstacleBottom1: Obstacle(
      world,
      "ObstacleBottom1",
      "green",
      pipeSizePosA.pipeBottom.pos,
      pipeSizePosA.pipeBottom.size,
      true
    ),
    ObstacleTop2: Obstacle(
      world,
      "ObstacleTop2",
      "green",
      pipeSizePosB.pipeTop.pos,
      pipeSizePosB.pipeTop.size,
      true
    ),
    ObstacleBottom2: Obstacle(
      world,
      "ObstacleBottom2",
      "green",
      pipeSizePosB.pipeBottom.pos,
      pipeSizePosB.pipeBottom.size,
      true
    ),
  };
};
