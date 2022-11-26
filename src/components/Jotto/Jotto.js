import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Congrats } from "./Congrats";
import { GuessedWords } from "./GuessedWords";
import { Input } from "./Input";
import { getSecretWord } from "./actions";

export const Jotto = () => {
  const success = useSelector((state) => state.success);
  const secretWord = useSelector((state) => state.secretWord);
  const guessedWords = useSelector((state) => state.guessedWords);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getSecretWord());
  // }, []);

  return (
    <div className="container" data-test="jotto-component">
      <h2>Jotto</h2>
      <Input secretWord={secretWord} success={success} />
      <div>The seceret word is {secretWord}</div>
      <Congrats success={success} />
      <GuessedWords guessedWords={guessedWords}></GuessedWords>
    </div>
  );
};
