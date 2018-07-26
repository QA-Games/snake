'use strict';

import { Engine } from './Engine.js';

export function Tile() {

    const _this = this;

    _this.position = { x: 0, y: 0};
    _this.color = '#F00';

    _this.update = update;
    _this.draw = draw;

    function update() {
        if (_this.position.x == 0 && _this.position.y == 0) {
            positionTile();
        } else if (findTile()) {
            positionTile();
            Engine.Game.Snake.incrementBody();
            Engine.Game.Score.points ++;
        }
    }

    function findTile() {
        return Engine.Game.Snake.body.filter((element) => {
            return element.x == _this.position.x && element.y == _this.position.y
        }).length > 0;
    }

    function positionTile() {
        _this.position.x = Math.floor(
            (Math.random() * (Engine.Game.canvas.width * 0.9 / Engine.Game.tileSize) + 1)
        );
        _this.position.y = Math.floor(
            (Math.random() * (Engine.Game.canvas.height * 0.9 / Engine.Game.tileSize) + 1)
        );

        if (findTile()) {
            positionTile();
        }
    }

    function draw() {
        Engine.Game.ctx.fillStyle = _this.color;
        Engine.Game.ctx.fillRect(
            _this.position.x * Engine.Game.tileSize,
            _this.position.y * Engine.Game.tileSize,
            Engine.Game.tileSize,
            Engine.Game.tileSize
        );
    }
}
