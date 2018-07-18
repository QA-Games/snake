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

    display: {
        x: 100,
        y: 200,
        color: '#ff0000',
        font: '30px Arial',
        draw: display
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

function display(text, color, font) {
    let ctx = Engine.Game.ctx;
    let _this = Engine.display;
    ctx.fillStyle = typeof color != 'undefined' ? color : _this.color;
    ctx.font = typeof font != 'undefined' ? font : _this.font;
    ctx.fillText(text, _this.x, _this.y);
}
