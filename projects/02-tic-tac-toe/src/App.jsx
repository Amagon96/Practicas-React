import { useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'
import { TURNS } from './constanst'
import { checkWinnerFrom } from './logic/board'
import { Square } from './components/Square'
import { WinnerModal } from './components/WinnerModal'

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.x;
  });
  // null: no hay ganador; false: empate;
  //TODO: Change to enum like turns
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);

    const newWinner = checkWinnerFrom(newBoard);
    // guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', newTurn);

    // revisar si hay ganador
    if (newWinner) {
      setWinner(newWinner);
      confetti()
      //Manejo de estado en react es asincrono, esto no bloquea el 
      // render y el alert sale antes de que se muestre en pantalla quien gana
      // alert(`El ganador es ${newWinner}`)
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);

    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Empezar de nuevo!</button>
      <section className='game'>
        {
          board.map((c, index) => {
            return (
              <Square 
                key={index}
                updateBoard={updateBoard}
                index={index}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App
