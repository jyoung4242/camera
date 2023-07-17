import { System } from "../ECS/system";
import { PositionComponent } from "../Components/positionComp";
import { VelocityComponent } from "../Components/velocityComp";
import { Entity } from "../ECS/entity";
import { Vector } from "../ECS/Vector";

export type MovementEntity = Entity & PositionComponent & VelocityComponent;

export class MovementSystem extends System {
  public constructor() {
    super("movement");
  }

  public processEntity(entity: MovementEntity): boolean {
    return entity.position != null && entity.velocity != null;
  }

  public update(deltaTime: number, now: number, entities: MovementEntity[]): void {
    entities.forEach(entity => {
      if (!this.processEntity(entity)) {
        return;
      }

      if (entity.position.x - 8 < 0 && entity.velocity.x < 0) {
        entity.position.x -= entity.velocity.multiply(deltaTime).x;
      } else if (entity.position.x + 8 > 400 && entity.velocity.x > 0) {
        entity.position.x -= entity.velocity.multiply(deltaTime).x;
      }
      if (entity.position.y - 8 < 0 && entity.velocity.y < 0) {
        entity.position.y -= entity.velocity.multiply(deltaTime).y;
      } else if (entity.position.y + 8 > 266 && entity.velocity.y > 0) {
      }
      entity.position.add(entity.velocity.multiply(deltaTime), true);
    });
  }
}

function randomInt(start: number, end: number): number {
  return Math.floor(Math.random() * (end - start) + start);
}
