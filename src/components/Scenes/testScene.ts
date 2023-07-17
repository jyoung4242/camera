//Library
import { Scene } from "../Scene";
import { Engine } from "@peasy-lib/peasy-engine";

//Scene Systems
import { Camera } from "../Camera";
import { MovementSystem } from "../Systems/Movement";

//Entities
import { DemoEntity } from "../Entities/demo";
import { MovementEntity } from "../Systems/Movement";
import { KeyboardSystem } from "../Systems/Keyboard";

export class Test extends Scene {
  name: string = "test";
  entities: any = [];
  entitySystems: any = [];
  sceneSystems: any = [];
  public template = `
    <scene-layer>
        < \${ sceneSystem === } \${ sceneSystem <=* sceneSystems }
    </scene-layer>
  `;
  public init = (): void => {
    //default entity creation
    this.entities.push(DemoEntity.create());

    //establish Scene Systems
    this.sceneSystems.push(Camera.create({ name: "camera", entities: this.entities }));

    //Systems
    this.systems.push(new MovementSystem(), new KeyboardSystem());

    //GameLoop
    Engine.create({ fps: 60, started: true, callback: this.update });
  };

  update = (deltaTime: number): void | Promise<void> => {
    this.systems.forEach(system => {
      system.update(deltaTime / 1000, 0, this.entities as MovementEntity[]);
    });
  };
}
