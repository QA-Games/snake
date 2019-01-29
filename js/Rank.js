'use strict';

import { Engine } from './Engine.js';

export function Rank() {

    const _this = this;

    _this.update = update;
    _this.draw = draw;

    function update() {}

    function draw() {
        const fontSize = getFontSize();
        const y = Math.floor(Engine.Game.canvas.height / 4);
        const x = Math.floor(Engine.Game.canvas.width / 2.5);
        let heigth = 0;
        let header = false;

        if (Engine.Game.RankService.players) {
            Engine.Game.RankService.players.forEach((player, index) => {                
                Engine.Game.ctx.fillStyle = '#000';
                Engine.Game.ctx.font = fontSize + 'px Arial';
                Engine.Game.ctx.textAlign = 'left';
                if (!header) {
                    header = true;
                    Engine.Game.ctx.fillText('# | Rank', x, (y + heigth));
                }
                heigth += fontSize;
                Engine.Game.ctx.fillText(index + 1 + ' - ' + player.name.substr(0, 3).toUpperCase() + ' ... ' + player.score, x, (y + heigth));                
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
