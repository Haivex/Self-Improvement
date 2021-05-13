import { Injectable } from '@nestjs/common';
import { Game } from '../game';
import { Games } from '../games';

@Injectable()
export class GamesService {
    private readonly games: Games = {
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
    }

    findAll(): Games {
        return this.games;
    }

    create(newGame: Game) {
        const id = Date.now();
        this.games[id] = {...newGame, id}
    }

    find(id: number): Game {
        const game: Game =  this.games[id];
        if(!game) throw new Error("No game found");
        return game;
    }

    update(game: Game) {
        if(!this.games[game.id]) throw new Error("No game found");
        this.games[game.id] = game;
    }

    delete(id: number) {
        const game: Game =  this.games[id];
        if(!game) throw new Error("No game found");

        delete this.games[id];
    }
}
