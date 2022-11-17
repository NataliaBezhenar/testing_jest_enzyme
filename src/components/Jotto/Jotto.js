import { Congrats } from "./Congrats";
import { GuessedWords } from "./GuessedWords";

export const Jotto = () => (
  <div className="container">
    <h2>Jotto</h2>
    <Congrats success={true} />
    <GuessedWords
      guessedWords={[
        { guessedWord: "train", lettersMatchCount: 3 },
        { guessedWord: "agile", lettersMatchCount: 1 },
        { guessedWord: "party", lettersMatchCount: 5 },
      ]}
    ></GuessedWords>
  </div>
);
