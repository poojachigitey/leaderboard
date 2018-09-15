import Swixer from '../app/Modules/Swixer/';

export default function* saga() {
    try {
        yield [
            Swixer.saga(),
        ];
    } catch (error) {
        return;
    }
}