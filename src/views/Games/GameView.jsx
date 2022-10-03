import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Game from '../../components/Games/Game/Game'
import ReviewList from '../../components/Reviews/ReviewList/ReviewList'
import gameService from '../../services/Games/gameService';

export async function gameLoader({ params }) {
    return gameService.getGameById(params.gameId);
}

function GameView() {
    const game = useLoaderData();
    return (
        <>
            <div className="row mb-4">
                <div className="col">
                    <Game game={game} />
                </div>
            </div>
            <div className="row">
                <div className='col'>
                    <ReviewList gameId={game.id} />
                </div>
            </div>
        </>
    )
}

export default GameView
