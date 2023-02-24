import React, { useState } from 'react';
import { Tile } from './Tile';
import { Player } from './Player';
import { Block } from './Block';
import { square } from '../Interfaces/Square';

export function Board({size, coords, board}: {
    size: [number, number];
    coords: [number, number];
    board: square[];
}): JSX.Element {
    //state for the board
    //change a tile to a player on movement
    //probably want to set up a good board at some point
    const grid: string = "repeat(" + size[0] + ", 3rem) / repeat(" + size[1] + ", 3rem)"
    return <div style={{
        display: 'grid',
        gridTemplate: grid,// rows, columns, second term is size
        gridGap: '0.3em',
      }}>
        {board.map((s: square) => {
            switch(s.type){
                case "a":
                    return <Tile></Tile>
                case "p":
                    return <Player></Player>
                case "b":
                    return <Block></Block>
            }
        })}
    </div>;
}