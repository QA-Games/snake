'use strict';

export const Engine = {

    Game: {},
    
    KEYBOARD_KEYS: {
        SPACE: 32,
        RIGHT: 39,
        LEFT: 37,
        ESC: 27,
        UP: 38,
        DOWN: 40
    },

    draw: draw,

    update: update,

    run: run,

    config: {
        tileSize: 60
    }
}

function draw() {
    let game = Engine.Game;
    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
    game.components.map((component) => {
        component.draw()
    });
}

function update() {
    Engine.Game.components.map((component) => {
        component.update()
    });
}

function run() {
    let game = Engine.Game;
    game.GAME_STATES[game.currentState].action();
    game.frames ++;
    setTimeout(run, 1000 / game.fps);
}
