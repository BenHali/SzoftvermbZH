import axios from "axios";

export class GenderGuesser {
    getGuess(name)
    {
        let string = axios.get('https://api.genderize.io/?name=' + name);

        return string;
    }
}