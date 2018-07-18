'use strict';

import { Engine } from './Engine.js';

window.addEventListener('keydown', keyDown);
window.addEventListener('resize', resizeWindow);

function keyDown(event) {
    if (
        Engine.Game.currentState == Engine.Game.GAME_STATES.NOT_STARTED.key &&
        event.keyCode == Engine.KEYBOARD_KEYS.UP ||
        event.keyCode == Engine.KEYBOARD_KEYS.DOWN ||
        event.keyCode == Engine.KEYBOARD_KEYS.LEFT ||
        event.keyCode == Engine.KEYBOARD_KEYS.RIGHT
    ) {
        Engine.Game.setGameState(Engine.Game.GAME_STATES.RUNNING.key);
    }

    let snake = Engine.Game.Snake;

    switch (event.keyCode) {
        case Engine.KEYBOARD_KEYS.LEFT:
            if (!(snake.direction.x == 1 && snake.direction.y == 0))
                snake.direction = { x: -1, y: 0 };
            break;

        case Engine.KEYBOARD_KEYS.UP:
            if (!(snake.direction.x == 0 && snake.direction.y == 1))
                snake.direction = { x: 0, y: -1 };
            break;

        case Engine.KEYBOARD_KEYS.RIGHT:
            if (!(snake.direction.x == -1 && snake.direction.y == 0))
                snake.direction = { x: 1, y: 0 };
            break;

        case Engine.KEYBOARD_KEYS.DOWN:
            if (!(snake.direction.x == 0 && snake.direction.y == -1))
                snake.direction = { x: 0, y: 1 };
            break;
        case Engine.KEYBOARD_KEYS.ESC:
            if (Engine.Game.currentState == Engine.Game.GAME_STATES.RUNNING.key) {
                Engine.Game.setGameState(Engine.Game.GAME_STATES.PAUSED.key);
            } else if (Engine.Game.currentState == Engine.Game.GAME_STATES.PAUSED.key) {
                Engine.Game.setGameState(Engine.Game.GAME_STATES.RUNNING.key);
            }
            break;
    }

}

function resizeWindow() {
    Engine.Game.canvas.width = window.innerWidth;
    Engine.Game.canvas.height = window.innerHeight;
    Engine.Game.tileSize = Math.max(
        Math.floor(Engine.Game.canvas.width / Engine.config.tileSize),
        Math.floor(Engine.Game.canvas.height / Engine.config.tileSize)
    );
}
