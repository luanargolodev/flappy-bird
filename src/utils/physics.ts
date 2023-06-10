import { Dimensions } from "react-native";
import Matter from "matter-js";
import { getPipeSizePosPair } from "./random";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export const Physics = (
  entities: any,
  { touches, time, dispatch }: { touches: any[]; time: any; dispatch: any }
) => {
  let engine = entities.physics.engine;

  touches
    .filter((t) => t.type === "press")
    .forEach((t) => {
      Matter.Body.setVelocity(entities.Bird.body, {
        x: 0,
        y: -4,
      });
    });

  Matter.Engine.update(engine, time.delta);

  return entities;
};
