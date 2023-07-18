import { System } from "../ECS/system";
import { Entity } from "../ECS/entity";
import { SpriteComponent } from "../Components/spriteComp";

export type SpriteEntity = Entity & SpriteComponent;

export class SpriteSystem extends System {
  public constructor() {
    super("movement");
  }

  public processEntity(entity: SpriteEntity): boolean {
    return entity.Sprite != null;
  }

  public update(deltaTime: number, now: number, entities: SpriteEntity[]): void {
    entities.forEach(entity => {
      if (!this.processEntity(entity)) {
        return;
      }
    });
  }
}
