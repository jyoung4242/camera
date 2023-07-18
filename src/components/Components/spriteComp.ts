import { Vector } from "../ECS/Vector";
import { Component } from "../ECS/component";

export interface ISpriteComponent {
  src: string;
}

export type SpriteType = {
  src: string;
  position: Vector;
  size: Vector;
};

export interface SpriteComponent {
  Sprite: SpriteType;
}

export class Sprite extends Component {
  public value: SpriteType | undefined;
  public imgElement: HTMLImageElement;
  public template = `
    <style>
      .sprite-component {
        position: absolute;
        top: 0px;
        left: 0px;
        background-size: cover;        
      }
    </style>
    <sprite-layer class="sprite-component" style="background-image: url(\${value.src});transform: translate(\${value.position.x}px, \${value.position.y}px);width: \${value.size.x}px; height: \${value.size.y}px; "></sprite-layer>
    `;

  public constructor() {
    //@ts-ignore
    super("sprite", Sprite, true);
    console.log("here");
    this.value = {
      src: "",
      position: new Vector(0, 0),
      size: new Vector(0, 0),
    };
    this.imgElement = new Image();
    console.log(this.value);
  }

  public define(data: ISpriteComponent): void {
    if (data == null) {
      return;
    }
    console.log(data);
    this.imgElement = new Image();
    this.imgElement.onload = () => {
      this.value = {
        src: this.imgElement.src,
        position: new Vector(0, 0),
        size: new Vector(this.imgElement.width, this.imgElement.height),
      };
      console.log(this.value);
    };
    this.imgElement.src = data.src;
  }
}
