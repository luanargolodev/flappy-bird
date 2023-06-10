import Matter from "matter-js";
import Bird from "../components/Bird";

export default () => {
  let engine = Matter.Engine.create({
    enableSleeping: false,
  });
  let world = engine.world;

  return {
    Bird: Bird(world, "green", { x: 120, y: 300 }, { width: 40, height: 40 }),
    physics: { engine, world },
  };
};
