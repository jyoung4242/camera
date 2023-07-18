import { Name } from "./nameComp";
import { Color } from "./colorComp";
import { Position } from "./positionComp";
import { Velocity } from "./velocityComp";
import { Keyboard, KeyboardComponent } from "./keyboardComp";
import { Sprite, SpriteComponent } from "./spriteComp";

export function LoadComponents() {
  [new Name(), new Color(), new Position(), new Velocity(), new Keyboard(), new Sprite()];
}
