import { Congrats } from "./Congrats";
import { GuessedWords } from "./GuessedWords";
import { Input } from "./Input";

export const Jotto = () => {
  const success = false;
  const secretWord = "party";
  const guessedWords = [];
  return (
    <div className="container" data-test="jotto-component">
      <h2>Jotto</h2>
      <Input secretWord={secretWord} success={success} />
      <Congrats success={success} />
      <GuessedWords guessedWords={guessedWords}></GuessedWords>
    </div>
  );
};
