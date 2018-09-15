import Leaderboard from '../app/Modules/Leaderboard/';

export default function* saga() {
    try {
        yield [
            Leaderboard.saga(),
        ];
    } catch (error) {
        return;
    }
}