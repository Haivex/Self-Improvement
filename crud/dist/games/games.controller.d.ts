import { Game } from '../game';
import { Games } from '../games';
import { GamesService } from './games.service';
export declare class GamesController {
    private readonly gamesService;
    constructor(gamesService: GamesService);
    index(): Promise<Games>;
    find(id: number): Promise<Game>;
    create(game: Game): void;
    update(game: Game): void;
    delete(id: number): void;
}
