import Phaser from "phaser";
import logo from "./logo.svg";

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-container',
    backgroundColor: '#93cbee',
    pixelArt: true, // Prevent pixel art from becoming blurred when scaled.
    scale: {
        mode: Phaser.Scale.ScaleModes.RESIZE,
        width: window.innerWidth,
        height: window.innerHeight,
    },
    autoFocus: true,
    scene: {
        preload: preload,
        create: create
    },
};
export const game = new Phaser.Game(config);

function preload() {
    this.load.image("logo", logo);
}
function create() {
    const logo = this.add.image(400, 150, "logo");
    this.tweens.add({
        targets: logo,
        y: 450,
        duration: 2000,
        ease: "Power2",
        yoyo: true,
        loop: -1
    });
}