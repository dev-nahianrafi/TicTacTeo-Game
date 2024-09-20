/* eslint-disable no-unused-vars */
import Btn from "../Components/Btn";
import useTicTactoe from "../hooks/use-tictacTeo";




export const TicTacToe = () => {
  
 const {boards, calculateWinner, handleClick, statusMassege, resetGame} = useTicTactoe();

  return (
    <>
      <div className="main--box">
        <div className="status">
            <div className="playerTurn">
              <h4>{statusMassege()}</h4>
              <Btn style="btn--style--two" content="Reset Game" onClick={resetGame} />
            </div>
        </div>


        <div className="game--board">
          {boards.map(( b , index)=>{
            return(
              <Btn 
                style="cell" 
                key={index} 
                onClick={() => handleClick(index)}
                content={b}  
                disabled={b !== null}
              />
            )
          })}
        </div>

      </div>
    </>
  );
};

export default TicTacToe;