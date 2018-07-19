'use strict';

import { Engine } from './Engine.js';

export function Snake() {

    const _this = this;

    _this.body = [
        { x: 10, y: 10 },
        { x: 10, y: 11 },
        { x: 10, y: 12 }
    ];

    _this.color = '#000';
    _this.direction = { x: 0, y: -1 };

    _this.update = update;
    _this.draw = draw;
    _this.incrementBody = incrementBody;
    _this.nextPosition = {
        x : _this.body[0].x + _this.direction.x,
        y : _this.body[0].y + _this.direction.y 
    };
    
    function incrementBody() {
        _this.body.push(
            _this.body[_this.body.length - 1]    
        );
    }
    
    function update() {
        const game = Engine.Game;

        const playerLose = _this.body[0].x <= 0 ||
            _this.body[0].y <= 0 ||
            _this.body[0].x >= (game.canvas.width / game.tileSize) ||
            _this.body[0].y >= (game.canvas.height / game.tileSize);
        if (playerLose) {
            game.setGameState(game.GAME_STATES.ENDED.key);
            return;
        }

        if (game.currentState == game.GAME_STATES.NOT_STARTED.key) {
            if (_this.direction.y == -1 && _this.nextPosition.y <= (game.canvas.height * 0.1 / game.tileSize)) {
                _this.direction = { x: 1, y: 0 };
            }

            else if (_this.direction.x == 1 && _this.nextPosition.x >= (game.canvas.width * 0.9 / game.tileSize)) {
                _this.direction = { x: 0, y: 1 };
            }

            else if (_this.direction.y == 1 && _this.nextPosition.y >= (game.canvas.height * 0.9 / game.tileSize)) {
                _this.direction = { x: -1, y: 0 };
            }

            if (_this.direction.x == -1 && _this.nextPosition.x <= (game.canvas.width * 0.1 / game.tileSize)) {
                _this.direction = { x: 0, y: -1 };
            }
        }
        
        _this.body.pop();
        _this.body.splice(0, 0, _this.nextPosition);
        _this.nextPosition = {
            x : _this.body[0].x + _this.direction.x,
            y : _this.body[0].y + _this.direction.y 
        };
    }

    function draw() {
        Engine.Game.ctx.fillStyle = _this.color;

        _this.body.forEach(element => {
            Engine.Game.ctx.fillRect(
                element.x * Engine.Game.tileSize,
                element.y * Engine.Game.tileSize,
                Engine.Game.tileSize,
                Engine.Game.tileSize
            );
        });
    }
}
