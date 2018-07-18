'use strict';

import { Game } from './Game.js';
import { Engine }  from './Engine.js';
import './events.js';

let game = new Game({ 
    fps: 15,
    tileSize: 60
});

console.log('Engine', Engine);