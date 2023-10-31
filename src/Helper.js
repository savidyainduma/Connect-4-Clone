import GameBoard from "./Components/GameBoard";

export const isWinner =(GameBoard, currentMove, currentPlayer) => {
    let Board = [...GameBoard];
    Board[currentMove] = currentPlayer;
    const winLines = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [0, 5, 10, 15],
        [3, 6, 9, 12]
    ];

    for(let i=0; i< winLines.length; i++){
        const [c1, c2, c3, c4] = winLines[i];

        if(Board[c1] >0 &&
            Board[c1] === Board[c2] &&
            Board[c2] === Board[c3] &&
            Board[c3] === Board[c4])
            {
                return true;
            } 
            
    }
    return false;

}
export const isDraw =(GameBoard, currentMove, currentPlayer) => {
    let Board = [...GameBoard];
    Board[currentMove]= currentPlayer;

    let count = Board.reduce((n, x) => n+ (x ===0), 0);
    console.log(`count ${count}`);
    return count === 0;
}