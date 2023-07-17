import { v4 as uuidv4 } from "uuid";
import { Entity } from "../ECS/entity";

export class DemoEntity {
  static create() {
    return Entity.create({
      id: uuidv4(),
      components: {
        name: "Bob",
        color: "red",
        position: [50, 50],
        velocity: [0, 0],
      },
    });
  }
}
