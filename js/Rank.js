'use strict';

import { Engine } from './Engine.js';

export function Rank() {

    const _this = this;

    _this.update = update;
    _this.draw = draw;

    function update() {}

    function draw() {
        const fontSize = getFontSize();
        const y = Engine.Game.canvas.width / 30;
        const x = Math.floor(Engine.Game.canvas.width / 2);
        let heigth = 0;
        if (Engine.Game.RankService.players) {
            Engine.Game.RankService.players.forEach((player) => {
                Engine.Game.ctx.fillStyle = '#000';
                Engine.Game.ctx.font = fontSize + 'px Arial';
                Engine.Game.ctx.textAlign = 'left';
                
                Engine.Game.ctx.fillText(player.name, x, (y + heigth));
                heigth += fontSize;
            });
        }
    }

    function getFontSize() {
        const tileSize = Math.max(
            Math.floor(Engine.Game.canvas.width / Engine.config.tileSize),
            Math.floor(Engine.Game.canvas.height / Engine.config.tileSize)
        );
        return tileSize * 2;
    }
}
