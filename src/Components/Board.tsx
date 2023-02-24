import React, { useState } from 'react';
import { Tile } from './Tile';
import { Player } from './Player';

export function Board({size, coords, board}: {
    size: [number, number];
    coords: [number, number];
    board: string[];
}): JSX.Element {
    //state for the board
    //change a tile to a player on movement
    //probably want to set up a good board at some point
    return <div style={{
        display: 'grid',
        gridTemplate: 'repeat(3, 3rem) / repeat(3, 3rem)',
        gridGap: '0.3em',
      }}>
        {board.map((s: string) => (
            s === "a" ? <Tile></Tile> : <Player></Player>
        ))}
    </div>;
}