'use strict';

import { Engine } from './Engine.js';

export function Rank() {

    const _this = this;

    _this.update = update;
    _this.draw = draw;

    function update() {}

    function draw(rank) {
        const fontSize = getFontSize();
        rank.forEach((player) => {
            Engine.Game.ctx.fillStyle = '#000';
            Engine.Game.ctx.font = fontSize + 'px Arial';
            Engine.Game.ctx.textAlign = 'left';
            let x = 50;
            let y = Math.floor(Engine.Game.canvas.width / 30);
            Engine.Game.ctx.fillText(player.name,  x, y);
            y += 20;
        });            
    }

    function getFontSize() {
        const tileSize = Math.max(
            Math.floor(Engine.Game.canvas.width / Engine.config.tileSize),
            Math.floor(Engine.Game.canvas.height / Engine.config.tileSize)
        );
        return tileSize * 2;
    }
}
