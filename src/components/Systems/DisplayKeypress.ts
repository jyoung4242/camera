export class KeypressDisplay {
  public template = `
  <style>
    .keypress{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 5%;
        width: 250px;
        height: 48px;
        background-color: grey;
        color: white;
        border: 1px solid white;
        z-Index: 3;
    }
  </style>

  <keypress-display class="keypress">
        \${keypress}
  </keypress-display>
  `;

  private constructor(public keypress: string) {}

  public static create(config: { keypress: string }): KeypressDisplay {
    return new KeypressDisplay(config.keypress);
  }
}
