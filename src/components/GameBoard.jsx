import React from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  //   const [gameBoard, setGameBoard] = useState(initialBoard);
  //     function handelSelectSquare(rowIndex, colIndex){
  //         setGameBoard((prevGameBoard)=>{
  //             let newBoard = [...prevGameBoard.map(innerArray=>[...innerArray])];
  //             newBoard[rowIndex][colIndex] = activePlayerSymbol;
  //             // console.log(activePlayerSymbol)
  //             return newBoard;
  //         })
  //         onSelectSquare();
  //     }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
