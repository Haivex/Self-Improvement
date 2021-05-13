"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamesService = void 0;
const common_1 = require("@nestjs/common");
let GamesService = class GamesService {
    constructor() {
        this.games = {
            1: {
                id: 1,
                description: 'gseh',
                title: 'tjte',
                cover: 'asd',
            },
            2: {
                id: 2,
                description: 'nsd',
                title: 'tjte',
                cover: 'jt',
            }
        };
    }
    findAll() {
        return this.games;
    }
    create(newGame) {
        const id = Date.now();
        this.games[id] = Object.assign(Object.assign({}, newGame), { id });
    }
    find(id) {
        const game = this.games[id];
        if (!game)
            throw new Error("No game found");
        return game;
    }
    update(game) {
        if (!this.games[game.id])
            throw new Error("No game found");
        this.games[game.id] = game;
    }
    delete(id) {
        const game = this.games[id];
        if (!game)
            throw new Error("No game found");
        delete this.games[id];
    }
};
GamesService = __decorate([
    common_1.Injectable()
], GamesService);
exports.GamesService = GamesService;
//# sourceMappingURL=games.service.js.map