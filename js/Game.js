'use strict';

import { Engine } from './Engine.js';
import { Snake } from './Snake.js';
import { Tile } from './Tile.js';
import { Display } from './Display.js';

export function Game(config) {

    const _this = this;

    _this.frames = 0;

    const GAME_STATES = {
        NOT_STARTED: { key: 'NOT_STARTED', action: notStarted },
        RUNNING: { key: 'RUNNING', action: running },
        ENDED: { key: 'ENDED', action: ended },
        PAUSED: { key: 'PAUSED', action: paused },
    };

    _this.components = [];
    _this.setGameState = setGameState;

    init(config);

    function init(config) {

        Engine.Game = _this;
        
        _this.fps = config.fps;
        _this.GAME_STATES = GAME_STATES;

        createCanvas(config);

        _this.Snake = new Snake();
        _this.Tile = new Tile();
        _this.Display = new Display();

        _this.components = [
            _this.Snake,
            _this.Display
        ];

        setGameState(GAME_STATES.NOT_STARTED.key);
        Engine.run();
    }

    function createCanvas(config) {
        _this.canvas = document.createElement('canvas');
        _this.ctx = _this.canvas.getContext('2d');

        _this.canvas.width = window.innerWidth;
        _this.canvas.height = window.innerHeight;

        _this.tileSize = Math.max(
            Math.floor(_this.canvas.width / config.tileSize),
            Math.floor(_this.canvas.height / config.tileSize)
        );

        Engine.config.tileSize = config.tileSize;

        document.body.appendChild(_this.canvas);
    }

    function setGameState(newGameState) {
        if (newGameState in GAME_STATES) {
            _this.currentState = newGameState;
        }
    }

    function ended() {
        _this.Display.text = 'Fim de jogo!';
        Engine.draw();
    }


    function notStarted() {
        _this.Display.text = 'Pressione as setas para jogar!';
        Engine.update();
        Engine.draw();
    }

    function paused() {
        Engine.draw();
    }

    function running() {
        if (_this.components.length == 2) {
            _this.components.push(_this.Tile);
        }
        if (_this.Display.text) {
            _this.Display.text = '';
        }
        Engine.update();
        Engine.draw();
    }

}