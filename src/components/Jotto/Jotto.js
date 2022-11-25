import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Congrats } from "./Congrats/Congrats";
import { GuessedWords } from "./GuessedWords/GuessedWords";
import { Input } from "./Input/Input";
import { getSecretWord } from "./actions";

export const Jotto = () => {
  const success = useSelector((state) => state.success);
  const secretWord = "party";
  const guessedWords = useSelector((state) => state.guessedWords);

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
