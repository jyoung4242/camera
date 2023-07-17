import { Component } from "../ECS/component";

export interface IKeyboardComponent {
  display: boolean;
  control: boolean;
  keyString: string;
}

export type KeyType = string;

export interface KeyboardComponent {
  keyboard: {
    display: boolean;
    control: boolean;
    keyString: string;
  };
}

export class Keyboard extends Component {
  public template = `
    <style>
      .keypressIndicator {
        position: absolute;
        width: 16px;
        height: 16px;
        top: -8px;
        left: -8px;
        z-Index: 3;
        font-size: x-small;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    </style>
    <div class="keypressIndicator">\${keyString}</div>
    `;

  public value: IKeyboardComponent = { display: false, control: false, keyString: "" };
  public keyboard: string | null;
  public display: boolean;
  public control: boolean;
  public keyString: string;
  public constructor() {
    //@ts-ignore
    super("keyboard", Keyboard, false);
    this.keyboard = "";
    this.display = false;
    this.control = false;
    this.keyString = "";
  }

  public define(data: IKeyboardComponent): void {
    if (data == null) {
      return;
    }
    this.value = data;
    this.control = data.control;
    this.display = data.display;
    this.keyString = "";
  }
}
