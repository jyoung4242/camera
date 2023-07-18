//Library
import { Scene } from "../Scene";
import { Engine } from "@peasy-lib/peasy-engine";

//Scene Systems
import { Camera, ICameraConfig } from "../Camera";
import { MovementSystem } from "../Systems/Movement";

//Entities
import { DemoEntity } from "../Entities/demo";
import { KeyboardSystem } from "../Systems/Keyboard";
import { KeypressEntity } from "../Entities/keypressdisplay";
import { Vector } from "../ECS/Vector";
import { MapEntity } from "../Entities/mapEntity";

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
    this.entities.push(new MapEntity());

    //establish Scene Systems - Configuring Camera
    let cConfig: ICameraConfig = {
      name: "camera",
      viewPortSystems: [],
      gameEntities: this.entities,
      position: new Vector(0, 0),
      size: new Vector(400, 200),
    };
    this.sceneSystems.push(Camera.create(cConfig));

    //Systems
    this.systems.push(new MovementSystem(), new KeyboardSystem());

    //GameLoop
    Engine.create({ fps: 60, started: true, callback: this.update });
  };

  update = (deltaTime: number): void | Promise<void> => {
    this.systems.forEach(system => {
      system.update(deltaTime / 1000, 0, this.entities);
    });
  };
}
