import { Vector } from "./ECS/Vector";

export interface ICameraConfig {
  name: string;
  viewPortSystems: Array<any>;
  gameEntities: Array<any>;
  position: Vector;
  size: Vector;
  focusPoint?: Vector;
}

export class Camera {
  public template = `
  <style>
    :root {
        --pixel-size: 3.25;
        --aspectRatio: 3/2;
        --vpWidth: 400px;
    }
    
    @media (max-width: 1200px) {
        :root {
          --pixel-size: 2;
        }
      }

      @media (max-width: 800px) {
        :root {
          --pixel-size: 1;
        }
      }
    .viewport {
      border: 1px white solid;
      border-radius: 3px;
      background-color: #222222;
      width: var(--vpWidth, 400px);
      aspect-ratio: var(--aspectRatio, 3/2);
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%) scale(var(--pixel-size));
      min-width: 240px;
      min-height: 160px;
    }
  </style>

  <view-port class="viewport">
        < \${ viewportSystems === } \${ vpSystem <=* vpSystem }
        <camera-layer>
            < \${ entity === } \${ entity <=* entities }
        </camera-layer>
  </view-port>
  `;

  private constructor(public name: string, public entities: any, public vpSystems: Array<any>) {}

  public static create(config: ICameraConfig): Camera {
    return new Camera(config.name, config.gameEntities, config.viewPortSystems);
  }

  public update(deltaTime: number) {
    this.vpSystems.forEach(vps => vps.update(deltaTime / 1000, 0, this.entities));
  }

  //Camera System Methods
  follow() {}
  pan() {}
  viewportShake() {}
  cameraShake() {}
  lerp() {}
  viewportFlash() {}
  cameraFlash() {}
  cameraZoom() {}
  setCameraBoundaries() {}
}
