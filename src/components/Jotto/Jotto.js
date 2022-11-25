import { useEffect } from "react";
import { Congrats } from "./Congrats/Congrats";
import { GuessedWords } from "./GuessedWords/GuessedWords";
import { Input } from "./Input/Input";
import { getSecretWord } from "./actions";

export const Jotto = () => {
  const success = false;
  const secretWord = "party";
  const guessedWords = [];

  useEffect(() => {
    getSecretWord();
  }, []);

  return (
    <div className="container" data-test="jotto-component">
      <h2>Jotto</h2>
      <Input secretWord={secretWord} success={success} />
      <Congrats success={success} />
      <GuessedWords guessedWords={guessedWords}></GuessedWords>
    </div>
  );
};
