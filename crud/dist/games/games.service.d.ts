import { Game } from '../game';
import { Games } from '../games';
export declare class GamesService {
    private readonly games;
    findAll(): Games;
    create(newGame: Game): void;
    find(id: number): Game;
    update(game: Game): void;
    delete(id: number): void;
}
