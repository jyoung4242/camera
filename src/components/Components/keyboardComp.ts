import { Component } from "../ECS/component";

export interface IKeyboardComponent {
  keyboard: KeyType;
}

export type KeyType = string;

export interface KeyboardComponent {
  keyboard: KeyType;
}

export class Keyboard extends Component {
  /* public template = `
    <style>
      .keypressIndicator {
        position: absolute;
        width: 16px;
        height: 16px;
        top: -8px;
        left: -8px;
        z-Index: 3;
      }
    </style>
    <div class="keypressIndicator">\${keyboard}</div>
    `; */
  public value: IKeyboardComponent = { keyboard: "" };
  public keyboard: string | null;
  public constructor() {
    //@ts-ignore
    super("keyboard", Keyboard, false);
    this.keyboard = null;
  }

  public define(data: IKeyboardComponent): void {
    if (data == null) {
      return;
    }
    this.value = data;
    this.keyboard = this.value.keyboard as KeyType;
  }
}
