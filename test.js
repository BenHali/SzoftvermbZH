
import { GenderGuesser } from "./GenderGuesser";
import { AttendanceList } from "./AttendanceList";

describe('Test GenderGuesser API', () => {
  let name;
  beforeAll(() => {
    name = new GenderGuesser();
  });
  test('ben', () => {
    name.getGuess('ben').then(result => {
      expect(result).resolves;
    });
  });
  test('return a value', () => {
    name.getGuess('tim').then(result => {
        expect(result).not.toBe(null);
    });
  });
  test('ben male', () => {
    name.getGuess('ben').then(result => {
        expect(result).arrayContaining('male');
    });
  });
});