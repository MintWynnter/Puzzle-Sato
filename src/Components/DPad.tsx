import React from 'react';
import { Button } from 'react-bootstrap';

export function DPad({size, coords, setpco}: {
    size: [number, number];
    coords: [number, number];
    setpco: (c: [number, number]) => void;
}): JSX.Element {
    return <div>
        <Button onClick={() => {setpco([coords[0], coords[1] + 1])}}>up</Button>
        <Button onClick={() => {setpco([coords[0], coords[1] - 1])}}>down</Button>
        <Button onClick={() => {setpco([coords[0] + 1, coords[1]])}}>right</Button>
        <Button onClick={() => {setpco([coords[0] - 1, coords[1]])}}>left</Button>
    </div>;
}