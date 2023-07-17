import { System } from "../ECS/system";
import { VelocityComponent } from "../Components/velocityComp";
import { KeyboardComponent } from "../Components/keyboardComp";
import { Entity } from "../ECS/entity";

export type KeyboardEntity = Entity & VelocityComponent & KeyboardComponent;
const ENTITY_SPEED = 30;
/* Direction key state */
const directions = {
  up: "up",
  down: "down",
  left: "left",
  right: "right",
};
const keys: any = {
  ArrowUp: directions.up,
  ArrowLeft: directions.left,
  ArrowRight: directions.right,
  ArrowDown: directions.down,
};

export class KeyboardSystem extends System {
  held_direction = <any>[];
  public constructor() {
    super("keyboard");
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      let dir = keys[e.code];
      if (dir && this.held_direction.indexOf(dir) === -1) {
        this.held_direction.unshift(dir);
      }
      //console.log(this.held_direction);
    });

    document.addEventListener("keyup", (e: KeyboardEvent) => {
      var dir = keys[e.code];

      var index = this.held_direction.indexOf(dir);
      if (index > -1) {
        this.held_direction.splice(index, 1);
      }
      //console.log(this.held_direction);
    });
  }

  public processEntity(entity: KeyboardEntity): boolean {
    return entity.velocity != null && entity.keyboard != null;
  }

  public update = (deltaTime: number, now: number, entities: KeyboardEntity[]): void => {
    entities.forEach(entity => {
      if (!this.processEntity(entity)) {
        return;
      }

      if (this.held_direction[0] != undefined) entity.keyboard = this.held_direction[0];
      else entity.keyboard = "";
      //console.log(entity);

      switch (this.held_direction[0]) {
        case "up":
          entity.velocity.y = -ENTITY_SPEED;
          entity.velocity.x = 0;
          break;
        case "down":
          entity.velocity.y = ENTITY_SPEED;
          entity.velocity.x = 0;
          break;
        case "left":
          entity.velocity.x = -ENTITY_SPEED;
          entity.velocity.y = 0;
          break;
        case "right":
          entity.velocity.x = ENTITY_SPEED;
          entity.velocity.y = 0;
          break;
        default:
          entity.velocity.x = 0;
          entity.velocity.y = 0;

          break;
      }
    });
  };
}
