'use strict';

import { Engine } from './Engine.js';

export function Display() {

    const _this = this;

    _this.update = update;
    _this.draw = draw;
    _this.text = '';

    function update() {}

    function draw() {
        if (_this.text) {
            Engine.Game.ctx.fillStyle = '#000';
            const fontSize = getFontSize();
            Engine.Game.ctx.font = fontSize + 'px Arial';
            Engine.Game.ctx.textAlign = 'center';
            const x = Math.floor(Engine.Game.canvas.width / 2);
            const y = Math.floor(Engine.Game.canvas.height / 2);
            Engine.Game.ctx.fillText(_this.text, x, y);
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
