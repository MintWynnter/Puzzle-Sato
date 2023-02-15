import React from 'react';
import { Tile } from './Tile'

export function Board({size, coords}: {
    size: [number, number];
    coords: [number, number];
}): JSX.Element {
    return <div>
        <Tile></Tile>

    </div>;
}