import { v4 as uuidv4 } from "uuid";
import { Entity } from "../ECS/entity";

export class KeypressEntity {
  static create() {
    return Entity.create({
      id: uuidv4(),
      components: {
        color: "Grey",
        position: [375, 250],
        velocity: [0, 0],
        keyboard: { display: true, control: false },
      },
    });
  }
}
