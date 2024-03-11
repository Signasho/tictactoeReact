import React, { useState } from "react";
import { Winner } from "../../helper.jsx";
import Board from "./Board.jsx";
import "../css/game.css";

const Game = ({ chooseX }) => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [turn, setTurn] = useState(chooseX);
	const winner = Winner(board);

	const handleClick = (i) => {
		const boardCopy = [...board];
		if (winner || boardCopy[i]) return;
		boardCopy[i] = turn ? "X" : "O";
		setBoard(boardCopy);
		setTurn(!turn);
	};

	const refreshPage = () => {
		window.location.reload();
	};

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-8 header">
						<h2>
							{winner
								? `${winner} Ganaste!`
								: `Es el turno de ${turn ? "X" : "O"}`}
						</h2>
						<button className="btn btn-dark" onClick={refreshPage}>
							Reiniciar Juego
						</button>
					</div>
				</div>
				<Board squares={board} onClick={handleClick} />
			</div>
		</>
	);
};

export default Game;
