import { WINNER_COMBOS } from "../constanst";

export const checkWinnerFrom = (boardToCheck) => {
    console.log(WINNER_COMBOS);
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }

    return null;
}