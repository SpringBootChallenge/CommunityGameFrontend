import React from 'react'
import GameStat from './Stats/GameStat'

function Game(props) {
    return (
        <div className="card p-5">
            <div className="row mb-3">
                <div className="col">
                    <img src="" alt="" />
                </div>
                <div className="col px-1">
                    <div className="row">
                        <div className="col">
                            <h2>Game</h2>
                            <h4>Description</h4>
                            <p>This is a description of the video game</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="col-12">
                                <h4>Platform</h4>
                                <p>PlayStation</p>
                            </div>
                            <div className="col-12">
                                <h4>Release date</h4>
                                <p>2019-10-04</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="col-12">
                                <h4>Genre</h4>
                                <p>Shooter</p>
                            </div>
                            <div className="col-12">
                                <h4>Updated at</h4>
                                <p>2022-09-15</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <GameStat value={80} statName={"Players"} />
                </div>
                <div className="col">
                    <GameStat value={80} statName={"Players"} />
                </div>
                <div className="col">
                    <GameStat value={80} statName={"Players"} />
                </div>
                <div className="col">
                    <GameStat value={80} statName={"Players"} />
                </div>
            </div>
        </div>
    )
}


export default Game
