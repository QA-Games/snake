'use strict';

import { Engine } from './Engine.js';

export function Score() {

    const _this = this;

    _this.update = update;
    _this.draw = draw;
    _this.points = 0;

    function update() {}

    function draw() {
            Engine.Game.ctx.fillStyle = '#000';
            const fontSize = getFontSize();
            Engine.Game.ctx.font = fontSize + 'px Arial';
            Engine.Game.ctx.textAlign = 'left';
            const x = 0;
            const y = Math.floor(Engine.Game.canvas.width / 30);
            Engine.Game.ctx.fillText('Score: ' + _this.points, x, y);
    }

    function getFontSize() {
        const tileSize = Math.max(
            Math.floor(Engine.Game.canvas.width / Engine.config.tileSize),
            Math.floor(Engine.Game.canvas.height / Engine.config.tileSize)
        );
        return tileSize * 2;
    }
}
