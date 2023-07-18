import { v4 as uuidv4 } from "uuid";
import { Entity } from "../ECS/entity";

export class MapEntity {
  static create() {
    return Entity.create({
      id: uuidv4(),
      components: {
        name: "map",
        position: [0, 0],
        sprite: ".src/assets/map.png",
      },
    });
  }
}
