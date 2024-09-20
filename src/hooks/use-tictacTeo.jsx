/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const initionalBoard = () => Array(9).fill(null);

const useTicTactoe = () => {
    const [boards, setboards] = useState(initionalBoard())
    const [isnext, setIsnext] = useState(true)

    const winningPatten = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]



    const calculateWinner = (currentBoards)=>{
        for (let i = 0; i < winningPatten.length; i++) {
            const [a, b, c] = winningPatten[i];

            if(currentBoards[a] && currentBoards[a] == currentBoards[b] && currentBoards[a] == currentBoards[c]){
                return currentBoards[a]
            }
        }
        return null;
    }



    const handleClick = (index)=>{
        // check if any winner
        const checkwinner = calculateWinner(boards)
        if(checkwinner || boards[index]) return


        const newBoard = [...boards]
        newBoard[index] = isnext ? "X" : "O"
        setboards(newBoard)
        setIsnext(!isnext)
    }



    const statusMassege = ()=>{
        const winners = calculateWinner(boards);

        if(winners) return `Player ${winners} Win!`;
            if(!boards.includes(null)) return `It's a Draw!`;
            return `Player ${isnext ? "X" : "O"} Turn`;

    }

    const resetGame = ()=>{
        setboards(initionalBoard())
        setIsnext(true)
    }

    return{boards, calculateWinner, handleClick, statusMassege, resetGame}
}

export default useTicTactoe;